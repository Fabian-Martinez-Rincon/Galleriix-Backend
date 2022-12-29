import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import data from '../images.json'


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey) 



export async function getStaticProps() {

  const imagesJson = JSON.parse(fs.readFileSync('images.json').toString());

  const { data } = await supabaseAdmin.from('Logos').insert([{
    name: 'Pedro Duarte',
    href: 'https://twitter.com/peduarte/status/1463897468383412231',
    imageSrc: 'https://katkzhgmwoqfjrdvgtqr.supabase.co/storage/v1/object/sign/images-links/1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtbGlua3MvMS5wbmciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzIxNzYwNTUsImV4cCI6MTk4NzUzNjA1NX0.Kl9B9-RhPtW-32kgU61Gkqq4RxPHc3k8b8PFtQXHjj0',
  }]);

  const promises = imagesJson.map((image:Image) => {
    return supabaseAdmin
      .from('Logos')
      .insert([{
        name: 'Pedro Duarte',
        href: 'https://twitter.com/peduarte/status/1463897468383412231',
        imageSrc: image.,
      }]);
  });

  return {
    props: {
      images: data
    }
  };
}
type Image = {
  id: string
  name: string
  url:string
}


export default function Gallery( images:any) {
  //console.log(images)
  console.log(data)
  return (
    <h1>hello
    </h1>
  );
}




import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey) 


export async function getStaticProps() {

  const { data } = await supabaseAdmin
    .storage.from('allimages').list()
  return {
    props: {
      images: data
    }
  };
}

export default function Gallery( images : string ) {
  console.log(images)
  return (
    <h1>hello
    </h1>
  );
}







import json from './images.json';


console.log(json)
//type ImageJson = {
//  name: string
//  href: string
//  url :{
//    publicUrl:string
//    }
//  }


//export async function getStaticProps() {
//  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
//  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
//  const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey)
//  const { data } = await supabaseAdmin.from('images').select('*');
//
//  json.forEach(async (item) => {
//    await supabaseAdmin.from('images').insert([{
//      name: item.name,
//      href: item.url.publicUrl,
//      username: '@nomadiix',
//      imageSrc: item.url.publicUrl
//    }]);
//  });
//  
//
//  return {
//    props: {
//      images: data
//    }
//  };
//}

type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
}



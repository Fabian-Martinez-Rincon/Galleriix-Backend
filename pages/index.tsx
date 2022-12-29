import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey) 



export async function getStaticProps() {

  const response = await fetch('C:\\Users\\fabian\\Desktop\\Galleriix-Backend\\images.json');
  const data = await response.json();
  console.log(data);


  return {
    props: {
      images: data
    }
  };
}
type Image = {
  id: number
  name: string
  url:string
}

export default function Gallery( { images }: { images: Image[] }) {
  console.log(images)

  return (
    <h1>hello
    </h1>
  );
}




# Galleriix-Backend

### Links de ayuda

- [Github](https://github.com/supabase/supabase/discussions/5936)
- [Github](https://github.com/supabase/supabase/discussions/1761)

### Codigo salvador

```sql
create policy list_all_buckets
on storage.buckets for select using (
true
);
```

### Codigo para cargar los nombres en formato json

```javascript
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey) 


export async function getStaticProps() {

  //const { data } = await supabaseAdmin.storage.listBuckets()

  const { data } = await supabaseAdmin
    .storage
    .from('images-links')
    .list('')
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

export default function Gallery( { images }: { images: Image[] }) {
  console.log(images)
  const filteredImages = images.map((image) => ({
    name: image.name,
    id: image.id
  }));

  console.log(filteredImages)
  const jsonString = JSON.stringify(filteredImages, null, 2);
  fs.writeFileSync('images.json', jsonString);
  return (
    <h1>hello
    </h1>
  );
}
```

### Codigo para las url

```javascript
export async function getStaticProps() {
  const imagesJson = JSON.parse(fs.readFileSync('images.json').toString());

  const promises = imagesJson.map((image:Image) => {
    return supabaseAdmin
      .storage
      .from('images-links')
      .getPublicUrl(image.name);
  });

  //const results = await Promise.all(promises);
  //const data = results.map((result) => result.data);

  const results = await Promise.all(promises);
  results.forEach((result, index) => {
    imagesJson[index].url = result.data;
  });

  const updatedJsonString = JSON.stringify(imagesJson, null, 2);
  fs.writeFileSync('images.json', updatedJsonString);

  return {
    props: {
      images: imagesJson
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
```

### Inserto todos los elementos de un json
```javascript
json.forEach(async (item) => {
    await supabaseAdmin.from('images').insert([{
      name: item.name,
      href: item.url.publicUrl,
      username: '@nomadiix',
      imageSrc: item.url.publicUrl
    }]);
  });
  
```
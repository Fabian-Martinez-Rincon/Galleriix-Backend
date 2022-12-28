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
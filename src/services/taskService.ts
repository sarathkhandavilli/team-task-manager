import { supabase } from "../supabase";

export const createTask = async (title: string, description: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("tasks")
    .insert({
      title,
      description,
      user_id: user?.id,
    })
    .select();

  if (error) throw error;
  return data;
};

export const getTasks = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};
import { useQuery } from "@tanstack/react-query";
import { API } from "./api";

export function useArtists() {
  return useQuery({
    queryKey: ["artists"],
    queryFn: async () => {
      const res = await API.get("/artists");
      return res.data;
    },
  });
}

export function useArtist(id) {
  return useQuery({
    queryKey: ["artist", id],
    queryFn: async () => {
      const res = await API.get(`/artists/${id}`);
      return res.data;
    },
    enabled: !!id, // only fetch when ID exists
  });
}


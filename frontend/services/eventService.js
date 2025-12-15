import { useQuery } from "@tanstack/react-query";
import { API } from "./api";

export function useEventInfo() {
  return useQuery({
    queryKey: ["event"],
    queryFn: async () => {
      const res = await API.get("/event");
      return res.data;
    },
  });
}

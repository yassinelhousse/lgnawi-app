import { useMutation } from "@tanstack/react-query";
import { API } from "./api";

export function useCreateBooking() {
  return useMutation({
    mutationFn: async (data) => {
      const res = await API.post("/bookings", data);
      return res.data;
    },
  });
}

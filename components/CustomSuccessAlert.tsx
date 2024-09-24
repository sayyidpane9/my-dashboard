import { useToast } from "@/hooks/use-toast";

export const CustomSuccessAlert = (message: string) => {
  toast({
    title: message,
  });
};

import { useMutation } from "@tanstack/react-query";
import { downloadFile } from "../../services/general";


export function useDownloadInvoicePdf() {
  return useMutation({
    mutationFn: async (invoiceId) => {
      const blob = await downloadFile(`/invoice/${invoiceId}/pdf`);

      return {
        blob,
        invoiceId,
      };
    },

    onSuccess: ({ blob, invoiceId }) => {
      try {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `invoice-${invoiceId}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error saving PDF:", error);
      }
    },

    onError: (error) => {
      console.error("Failed to download invoice:", error);
    },
  });
}
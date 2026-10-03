import PropTypes from "prop-types";
import Modal from "../Modal";
import { customerquotationcols } from "../../utils/columns";
import Table from "../Table";

export default function QuotationView({
  isOpen,
  close,
  data,
  isFetched,
}) {
  return (
    // isFetched && (
      <Modal
        isOpen={isOpen}
        title="Quotation Details"
        showActions
        confirmText="Ok"
        backText="Cancel"
        onConfirm={close}
        onClose={close}
      >
        <Table
          columns={customerquotationcols}
          data={data?.items ?? []}
          rowsPerPage={5}
        />

        <div className="grid grid-cols-4 items-end pe-2 pt-16 gap-6">
          <div className="flex items-center gap-x-4">
            <span>Sub Total :</span>
            <span className="tracking-wide">{data?.subtotal} AED</span>
          </div>

          <div className="flex items-center gap-x-4">
            <span>Discount :</span>
            <span className="tracking-wide">{data?.discount_amount} AED</span>
          </div>

          <div className="flex items-center gap-x-4">
            <span>Tax :</span>
            <span className="tracking-wide">{data?.tax_amount} AED</span>
          </div>

          <div className="flex items-center gap-x-4">
            <span>Grand Total :</span>
            <span className="tracking-wide underline underline-offset-4">
              {data?.grand_total} AED
            </span>
          </div>
        </div>
      </Modal>
    )
  // );
}

QuotationView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  isFetched: PropTypes.bool,
  data: PropTypes.shape({
    subtotal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    discount_amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    tax_amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    grand_total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    items: PropTypes.arrayOf(PropTypes.object),
  }),
};


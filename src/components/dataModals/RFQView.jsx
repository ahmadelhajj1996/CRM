import Modal from "../Modal";
import {rfqitemcols} from '../../utils/columns'
import Table from "../Table";
export default function RFQView({ isOpen, confirm ,  close, data }) {
  



  return (
    <Modal
      isOpen={isOpen}
      title={"RFQ Details "}
      showActions={true}
      data
      confirmText = "Ok"
      backText = "Cancel"
      onConfirm={close}
      onClose={close}
    >
        
      <Table
        columns={rfqitemcols}
        data={data ?? []}
        rowsPerPage={5}
      />

    </Modal>
  );
}

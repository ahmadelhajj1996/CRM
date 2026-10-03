import { formatDate } from './formatDate';

export const categorycols = [
  {
    key: "amount",
    header: "amount",
    expansion: "110px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
    exportValue: ({ row, lang }) => row.amount ?? "",
  },

  {
    key: "description",
    header: "description",
    expansion: "400px",
    render: ({ row, lang }) => row.description ?? "",
    exportValue: ({ row, lang }) => row.description ?? "",
    width: 6,
    maxWidth: 24,
    align: "left",
    export: true,
  },

  {
    key: "occurred_at",
    header: "time",
    expansion: "400px",

    render: ({ row }) => formatDate(row.occurred_at),

    exportValue: ({ row }) => formatDate(row.occurred_at),

    width: 6,
    maxWidth: 24,
    align: "left",
    export: true,
  },

  {
    key: "actions",
    header: "actions",
    isActions: true,
    expansion: "100px",
    export: false,
  },
];

export const productscols = [
  {
    key: "name",
    header: "Name",
    expansion: "150px",
    render: ({ row, lang }) => row.name?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
    exportValue: ({ row, lang }) => row.name?.[lang] ?? "",
  },
  {
    key: "code",
    header: "Code",
    expansion: "80px",
    width: 3,
    maxWidth: 4,
    align: "left",
    export: true,
  },
  {
    key: "is_active",
    header: "Active",
    expansion: "90px",
    className: " text-center",
    render: ({ value }) => {
      return (
        <span
          className={`   py-0.5 rounded text-xs font-medium flex justify-center ${
            Boolean(value) == true ? "gbill" : "rbill"
          }`}
        >
          {Boolean(value) == true ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "is_featured",
    header: "featured ",
    expansion: "60px",
    render: ({ value }) => {
      return (
        <span
          className={`   py-0.5 rounded text-xs font-medium flex justify-center ${
            Boolean(value) == true ? "gbill" : "rbill"
          }`}
        >
          {Boolean(value) == true ? "featured" : "notfeatured"}
        </span>
      );
    },
    align: "left",
    export: true,
  },
  {
    key: "status",
    header: "status",
    expansion: "70px",
    width: 3,
    maxWidth: 4,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "50px",
    export: false,
  },
];
export const supplierscols = [
  {
    key: "name",
    header: "Name",
    expansion: "90px",
    render: ({ row, lang }) => row.name?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "email",
    header: "Email",
    expansion: "100px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "phone",
    header: "Phone",
    expansion: "90px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "city",
    header: "city",
    expansion: "75px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "tax_number",
    header: "tax number",
    expansion: "90px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "contact_person",
    header: "contact person",
    expansion: "100px",
    render: ({ row, lang }) => row.contact_person?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "is_active",
    header: "Active",
    expansion: "70px",
    render: ({ value }) => {
      return (
        <span
          className={`   py-0.5 rounded text-xs font-medium flex justify-center ${
            Boolean(value) == true ? "gbill" : "rbill"
          }`}
        >
          {Boolean(value) == true ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "50px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];
export const warehousecols = [
  {
    key: "name",
    header: "Name",
    expansion: "100px",
    render: ({ row, lang }) => row.name?.[lang] ?? "",
    width: 6,
    maxWidth: 12,
    align: "left",
    export: true,
  },
  {
    key: "email",
    header: "Email",
    expansion: "100px",
    width: 6,
    maxWidth: 12,
    align: "left",
    export: true,
  },
  {
    key: "phone",
    header: "Phone",
    expansion: "90px",
    width: 6,
    maxWidth: 8,
    align: "left",
    export: true,
  },
  {
    key: "address",
    header: "address",
    expansion: "175px",
    render: ({ row, lang }) => row.address?.[lang] ?? "",
    width: 6,
    maxWidth: 12,
    align: "left",
    export: true,
  },
  {
    key: "code",
    header: "Code",
    expansion: "100px",
    width: 3,
    maxWidth: 4,
    align: "left",
    export: true,
  },
  {
    key: "is_active",
    header: "Active",
    expansion: "70px",
    render: ({ value }) => {
      return (
        <span
          className={`   py-0.5 rounded text-xs font-medium flex justify-center ${
            Boolean(value) == true ? "gbill" : "rbill"
          }`}
        >
          {Boolean(value) == true ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 3,
    maxWidth: 4,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "50px",
    export: false,
  },
];
export const purchaseOrderCols = [
  {
    key: "order_number",
    header: "No.",
    expansion: "130px",
    className: "px-1",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "order_date",
    header: "Order Date",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "updated_at",
    header: "Last Update",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "supplier",
    header: "supplier",
    expansion: "100px",
    render: ({ row, lang }) =>
      (
        <span className=" text-xs md:text-sm tracking-wider ">
          {" "}
          {row.supplier?.[lang]}{" "}
        </span>
      ) ?? "__",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "status",
    header: "Status",
    expansion: "100px",
    render: ({ row }) => {
      const statusColors = {
        draft: "text-gray-500",
        pending: "text-amber-600",
        approved: "text-emerald-600",
        partially_received: "text-sky-600",
        received: "text-green-600",
        cancelled: "text-red-600",
      };

      return (
        <span className={`${statusColors[row.status]} text-xs md:text-sm`}>
          {row.status}
        </span>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "subtotal",
    header: "Subtotal",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "discount_amount",
    header: "Discount",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "tax_amount",
    header: "Tax",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "grand_total",
    header: "Total",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm underline underline-offset-2 hover:underline-offset-4 cursor-pointer">
        {Number(value)}
      </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "procedures",
    header: "procedures",
    isActions: false,
    expansion: "150px",
    render: ({ row, meta }) => {
      const actions = orderActions[row.status] ?? [];

      return (
        <div className="flex justify-around">
          {actions.map(({ label, color, action }) => (
            <ActionButton
              key={label}
              label={label}
              color={color}
              onClick={() => meta?.[action]?.(row)}
            />
          ))}
        </div>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "70px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];
export const purchaseOrderItemCols = [
  {
    key: "product",
    header: "Product",
    expansion: "80px",
    render: ({ row, lang }) => row.product?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "quantity",
    header: "quantity",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "unit_price",
    header: "unit price",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "subtotal",
    header: "Subtotal",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "discount_amount",
    header: "Discount",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "tax_amount",
    header: "Tax",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "total",
    header: "Total",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm underline underline-offset-2 hover:underline-offset-4 cursor-pointer">
        {Number(value)}
      </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];
export const purchaseReceiptCols = [
  {
    key: "receipt_number",
    header: "No.",
    expansion: "120px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "items_count",
    header: "Items No. ",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "subtotal",
    header: "Subtotal",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "discount_amount",
    header: "Discount",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "tax_amount",
    header: "Tax",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "grand_total",
    header: "Total",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm underline underline-offset-2 hover:underline-offset-4 cursor-pointer">
        {Number(value)}
      </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "receipt_date",
    header: "Date",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "70px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];
export const purchaseReceiptItemCols = [
  {
    key: "product",
    header: "Product",
    expansion: "80px",
    render: ({ row, lang }) => row?.order_item.product?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "quantity_ordered",
    header: "ordered qty",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "quantity_received",
    header: "received qty",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "unit_price",
    header: "unit price",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "subtotal",
    header: "Subtotal",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "discount_amount",
    header: "Discount",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "tax_amount",
    header: "Tax",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "total",
    header: "Total",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm underline underline-offset-2 hover:underline-offset-4 cursor-pointer">
        {Number(value)}
      </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];
export const careercols = [
  {
    key: "id",
    header: "#",
    expansion: "40px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "title",
    header: "Title",
    expansion: "125px",
    render: ({ row, lang }) => row.title?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "description",
    header: "Description",
    expansion: "175px",
    render: ({ row, lang }) => row.description?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "min_salary",
    header: "Min Salary",
    expansion: "60px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "max_salary",
    header: "Max Salary",
    expansion: "60px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "code",
    header: "Code",
    expansion: "60px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "is_active",
    header: "Active",
    expansion: "70px",
    render: ({ value }) => {
      console.log("is_active raw value:", value, typeof value);

      return (
        <span
          className={`px-2 py-0.5 rounded text-xs font-medium flex justify-center ${
            Boolean(value) == true ? "gbill" : "rbill"
          }`}
        >
          {Boolean(value) == true ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "80px",
  },
];
export const employeecols = [
  {
    key: "name",
    header: "name",
    expansion: "90px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "email",
    header: "Email",
    expansion: "125px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "department",
    header: "department",
    expansion: "100px",
    render: ({ row, lang }) => row.department?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "career",
    header: "career",
    expansion: "100px",
    render: ({ row, lang }) => row.career?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "code",
    header: "Code",
    expansion: "125px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "status",
    header: "Active",
    expansion: "70px",
    render: ({ value }) => {
      return (
        <span
          className={`px-2 py-0.5 rounded text-xs font-medium flex justify-center ${
            value == "active" ? "gbill" : "rbill"
          }`}
        >
          {value == "active" ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "hire_date",
    header: "hire date",
    expansion: "125px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "salary",
    header: "Salary",
    expansion: "90px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "80px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];
export const customercols = [
  {
    key: "name",
    header: "name",
    expansion: "130px",
    render: ({ row, lang }) => row.name?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "email",
    header: "Email",
    expansion: "150px",
    render: ({ row }) => row.email ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "phone",
    header: "phone",
    expansion: "120px",
    render: ({ row }) => row.phone ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "address",
    header: "address",
    expansion: "120px",
    render: ({ row, lang }) => row.address?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "city",
    header: "city",
    expansion: "50px",
    render: ({ row }) => row.city ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "tax_number",
    header: "tax number",
    expansion: "100px",
    render: ({ row }) => row.tax_number ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "is_active",
    header: "Active",
    expansion: "70px",
    render: ({ value }) => {
      return (
        <span
          className={` py-0.5 flex justify-center rounded text-xs  font-medium  ${
            value ? "gbill" : "rbill"
          }`}
        >
          {value ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "60px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

export const supplierPriceCols = [
  {
    key: "supplier_id",
    header: "Supplier",
    expansion: "200px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "cost_price",
    header: "Cost Price",
    expansion: "120px",
    render: ({ value }) => {
      return <span className="font-medium">{Number(value).toFixed(2)}</span>;
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

export function ActionButton({ label, color, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`underline underline-offset-8 cursor-pointer font-medium hover:opacity-70 ${color}`}
    >
      {label}
    </button>
  );
}

const statusColors = {
  sent: "text-blue-600 hover:text-blue-700",
  cancel: "text-red-600 hover:text-red-700",
  wait: "text-amber-600 hover:text-amber-700",
  view: "text-slate-600 hover:text-slate-800",
  delete: "text-red-700 hover:text-red-800",
  print: "text-gray-600 hover:text-gray-800",
  open: "text-cyan-600 hover:text-cyan-700",
  approve: "text-emerald-600 hover:text-emerald-700",
  reject: "text-red-600 hover:text-red-700",
  create: "text-indigo-600 hover:text-indigo-700",
  send: "text-blue-600 hover:text-blue-700",
  expired: "text-gray-500",
  blue: "text-cyan-600",
  gray: "text-gray-600",
  amber: "text-amber-600",
  green: "text-emerald-600",
  part: "text-sky-600",
  full: "text-green-600",
  cancelled: "text-red-600",
};

const advanceActions = {
  pending: [
    {
      label: "Approve",
      color: "text-green-600",
      action: "onApproved",
    },
    {
      label: "Reject",
      color: "text-red-600",
      action: "onReject",
    },
  ],
  approved: [
    {
      label: "Paid",
      color: "text-blue-600",
      action: "onPaid",
    },
  ],
  rejected: [],
  paid: [
    {
      label: "Print",
      color: "text-blue-600",
      action: "onPrint",
    },
  ],
};

export const advancecols = [
  {
    key: "reference",
    header: "reference",
    expansion: "125px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "amount",
    header: "amount",
    expansion: "100px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "remaining_amount",
    header: "remaining_amount",
    expansion: "100px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "status",
    header: "status",
    expansion: "59px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "request_date",
    header: "request date",
    expansion: "125px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "approved_date",
    header: "action date",
    expansion: "125px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "reason",
    header: "reason",
    expansion: "90px",
    render: ({ row, lang }) => row.reason?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "notes",
    header: "notes",
    expansion: "90px",
    render: ({ row, lang }) => row.notes?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "actions",
    header: "Actions",
    isActions: false,
    expansion: "100px",
    render: ({ row, meta }) => {
      const actions = advanceActions[row.status] ?? [];

      return (
        <div className="flex justify-around">
          {actions.map(({ label, color, action }) => (
            <ActionButton
              key={label}
              label={label}
              color={color}
              onClick={() => meta?.[action]?.(row)}
            />
          ))}
        </div>
      );
    },
  },
];

export const alladvancecols = [
  {
    key: "reference",
    header: "reference",
    expansion: "110px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "employee",
    header: "employee",
    expansion: "100px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "salary",
    header: "salary",
    expansion: "80px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "paid_advances_this_month",
    header: "Paid Sum.",
    expansion: "80px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "remaining_amount",
    header: "Paid No.",
    expansion: "80px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "status",
    header: "status",
    expansion: "59px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "request_date",
    header: "request date",
    expansion: "125px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "approved_date",
    header: "action date",
    expansion: "125px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "reason",
    header: "reason",
    expansion: "90px",
    render: ({ row, lang }) => row.reason?.[lang] ?? " ___ ",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "notes",
    header: "notes",
    expansion: "90px",
    render: ({ row, lang }) => row.notes?.[lang] ?? " ___ ",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "actions",
    header: "Actions",
    isActions: false,
    expansion: "100px",
    render: ({ row, meta }) => {
      const actions = advanceActions[row.status] ?? [];
      return (
        <div className="flex justify-around">
          {actions.map(({ label, color, action }) => (
            <ActionButton
              key={label}
              label={label}
              color={color}
              onClick={() => meta?.[action]?.(row)}
            />
          ))}
        </div>
      );
    },
  },
];

const orderActions = {
  draft: [
    {
      label: "Confirm",
      color: statusColors.pending,
      action: "onConfirm",
    },
    {
      label: "Delete",
      color: statusColors.cancelled,
      action: "onDelete",
    },
  ],
  pending: [
    {
      label: "Approve",
      color: statusColors.approved,
      action: "onApprove",
    },
    {
      label: "Cancel",
      color: statusColors.cancelled,
      action: "onCancel",
    },
  ],

  approved: [
    {
      label: "Receipts",
      color: statusColors.partially_received,
      action: "onReceipts",
    },
    {
      label: "Cancel",
      color: statusColors.cancelled,
      action: "onCancel",
    },
  ],

  partially_received: [
    {
      label: "Receipts",
      color: statusColors.partially_received,
      action: "onReceipts",
    },
    {
      label: "View Receipts",
      color: statusColors.received,
      action: "onReceipts",
    },
  ],

  received: [
    {
      label: "Receipts",
      color: statusColors.received,
      action: "onReceipts",
    },
    {
      label: "Invoice",
      color: statusColors.received,
      action: "onInvoices",
    },
  ],
};

const rfqActions = {
  draft: [
    { label: "Send", color: statusColors.sent, action: "onSent" },
    { label: "Cancel", color: statusColors.cancel, action: "onCancel" },
  ],
  sent: [
    {
      label: "Waiting Supplier Response",
      color: statusColors.wait,
      action: "onWaiting",
    },
    { label: "Cancel", color: statusColors.cancel, action: "onCancel" },
  ],
  open: [
    {
      label: "Waiting Supplier Response",
      color: statusColors.wait,
      action: "onWaiting",
    },
  ],

  quoted: [
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
  ],
  converted: [
    {
      label: "view Quetation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
    // {
    //   label: "Print",
    //   color: "text-blue-600",
    //   action: "onPrint",
    // },
  ],
  expired: [
    // { label: "Convert", color: statusColors.view, action: "onViewQuotation" },
  ],
  cancelled: [
    {
      label: "view Quetation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
    { label: "Delete", color: statusColors.delete, action: "onDelete" },
  ],
  closed: [
    {
      label: "view Quetation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
    { label: "Convert", color: statusColors.print, action: "onViewInvoice" },
  ],
};

const supplierrfqActions = {
  sent: [
    {
      label: "Open",
      color: statusColors.open,
      action: "onOpen",
      visible: true,
    },
  ],
  open: [
    {
      label: "view",
      color: statusColors.open,
      action: "onView",
      visible: true,
    },
    {
      label: "Approve",
      color: statusColors.approve,
      action: "onApprove",
      visible: true,
    },
    {
      label: "Reject",
      color: statusColors.reject,
      action: "onReject",
      visible: true,
    },
  ],
  approved: [
    {
      label: "view",
      color: statusColors.open,
      action: "onView",
      visible: true,
    },
    {
      label: "Quote",
      color: statusColors.create,
      action: "onCreate",
      visible: true,
    },
  ],
  quoted: [
    {
      label: "view",
      color: statusColors.open,
      action: "onView",
      visible: true,
    },
    {
      label: "Waiting Response",
      color: statusColors.wait,
      action: "onWaiting",
      visible: true,
    },
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
    // {
    //   label: "Withdraw",
    //   color: statusColors.cancel,
    //   action: "onWithdraw",
    //   visible: true,
    // },
  ],
  rejected: [
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
    { label: "__", action: "", visible: false }, // terminal state, nothing to do
  ],
  converted: [
    {
      label: "view",
      color: statusColors.open,
      action: "onView",
      visible: true,
    },
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },

    // {
    //   label: "Send Invoice",
    //   color: statusColors.send,
    //   action: "onSendInvoice",
    //   visible: true,
    // },
  ],
  cancelled: [
    {
      label: "view",
      color: statusColors.open,
      action: "onView",
      visible: true,
    },
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
  ],

  expired: [
    {
      label: "view",
      color: statusColors.open,
      action: "onView",
      visible: true,
    },
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
  ],
  closed: [
    {
      label: "view",
      color: statusColors.open,
      action: "onView",
      visible: true,
    },
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
  ],
};

// MySide

const salesrfqActions = {
  sent: [
    {
      label: "Open",
      color: statusColors.open,
      action: "onOpen",
      visible: true,
    },
  ],
  open: [
    {
      label: "view",
      color: statusColors.open,
      action: "onViewRFQ",
      visible: true,
    },
    {
      label: "Approve",
      color: statusColors.approve,
      action: "onApprove",
      visible: true,
    },
    {
      label: "Reject",
      color: statusColors.reject,
      action: "onReject",
      visible: true,
    },
  ],

  approved: [
    {
      label: "view",
      color: statusColors.open,
      action: "onViewRFQ",
      visible: true,
    },
    {
      label: "Quote",
      color: statusColors.create,
      action: "onAddQuete",
      visible: true,
    },
  ],

  quoted: [
    {
      label: "view",
      color: statusColors.open,
      action: "onViewRFQ",
      visible: true,
    },
    {
      label: "Waiting Response",
      color: statusColors.wait,
      action: "onWaiting",
      visible: true,
    },
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
  ],

  rejected: [
    {
      label: "view",
      color: statusColors.open,
      action: "onViewRFQ",
      visible: true,
    },
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
  ],

  converted: [
    {
      label: "view",
      color: statusColors.open,
      action: "onViewRFQ",
      visible: true,
    },
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
    {
      label: "Create Order",
      color: statusColors.view,
      action: "onConvert",
    },
  ],

  cancelled: [
    {
      label: "view",
      color: statusColors.open,
      action: "onViewRFQ",
      visible: true,
    },
  ],

  expired: [
    {
      label: "view",
      color: statusColors.open,
      action: "onViewRFQ",
      visible: true,
    },
  ],

  closed: [
    {
      label: "view",
      color: statusColors.open,
      action: "onViewRFQ",
      visible: true,
    },
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
  ],
};

// CustomerSide
const salerfqActions = {
  draft: [
    {
      label: "View RFQ",
      color: statusColors.view,
      action: "onViewRFQ",
    },
    {
      label: "Sent",
      color: statusColors.sent,
      action: "onSent",
    },
    {
      label: "cancel",
      color: statusColors.cancelled,
      action: "onCancel",
    },
  ],
  sent: [
    {
      label: "View RFQ",
      color: statusColors.view,
      action: "onViewRFQ",
    },
    {
      label: "wait the Quotation",
      color: statusColors.wait,
      action: "onWaiting",
    },
  ],
  quoted: [
    {
      label: "View RFQ",
      color: statusColors.view,
      action: "onViewRFQ",
    },
    {
      label: "View Quotation",
      color: statusColors.view,
      action: "onViewQuotation",
    },
    {
      label: "Accept",
      color: statusColors.approve,
      action: "onApprove",
    },
    {
      label: "Decline",
      color: statusColors.reject,
      action: "onReject",
    },
  ],
  approved: [
    {
      label: "View RFQ",
      color: statusColors.view,
      action: "onViewRFQ",
    },
  ],
  // rejected: [
  //   {
  //     label: "View RFQ",
  //     color: statusColors.view,
  //     action: "onViewRFQ",
  //   },

  //   {
  //     label: "View Reject Reasons",
  //     color: statusColors.view,
  //     action: "onViewRejectReasons",
  //   },
  // ],
  converted: [
    {
      label: "View RFQ",
      color: statusColors.view,
      action: "onViewRFQ",
    },
    {
      label: "View Quotation",
      color: statusColors.blue,
      action: "onViewQuotation",
    },
    // {
    //   label: "download Invoice",
    //   color: statusColors.blue,
    //   action: "onDownloadInvoice",
    // },
  ],
  expired: [
    {
      label: "View RFQ",
      color: statusColors.view,
      action: "onViewRFQ",
    },
    {
      label: "Request Again",
      color: statusColors.view,
      action: "onRequestAgain",
    },
  ],
  cancelled: [
    {
      label: "View RFQ",
      color: statusColors.view,
      action: "onViewRFQ",
    },
    {
      label: "View Quotation",
      color: statusColors.blue,
      action: "onViewQuotation",
    },
    {
      label: "download Invoice",
      color: statusColors.blue,
      action: "onDownloadInvoice",
    },
  ],
  closed: [
    {
      label: "View RFQ",
      color: statusColors.view,
      action: "onViewRFQ",
    },
    {
      label: "View Quotation",
      color: statusColors.blue,
      action: "onViewQuotation",
    },
    // {
    //   label: "download Invoice",
    //   color: statusColors.blue,
    //   action: "onDownloadInvoice",
    // },
  ],
};

const saleOrderActions = {
  draft: [
    {
      label: "Confirm",
      color: statusColors.pending,
      action: "onConfirm",
    },
    {
      label: "Delete",
      color: statusColors.cancelled,
      action: "onDelete",
    },
  ],
  confirmed: [
    {
      label: "processing",
      color: statusColors.approved,
      action: "onApprove",
    },
    {
      label: "Cancel",
      color: statusColors.cancelled,
      action: "onCancel",
    },
  ],

  processing: [
    {
      label: "Shipments",
      color: statusColors.partially_received,
      action: "onShipments",
    },
    {
      label: "Cancel",
      color: statusColors.cancelled,
      action: "onCancel",
    },
  ],

  shipped: [
    {
      label: "completed",
      color: statusColors.partially_received,
      action: "onComplete",
    },
    {
      label: "View Shipments",
      color: statusColors.received,
      action: "onShipments",
    },
  ],

  completed: [
    {
      label: "Shipments",
      color: statusColors.received,
      action: "onShipments",
    },
    {
      label: "Invoice",
      color: statusColors.received,
      action: "onInvoices",
    },
  ],

  cancelled: [
    {
      label: "Re_Order",
      color: statusColors.received,
      action: "onRe_Order",
    },
    {
      label: "Cancel reasons",
      color: statusColors.received,
      action: "onReasons",
    },
  ],
};

export const saleOrderCols = [
  {
    key: "order_number",
    header: "No.",
    expansion: "130px",
    className: "px-1",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "order_date",
    header: "Order Date",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "updated_at",
    header: "Last Update",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "customer",
    header: "customer",
    expansion: "100px",
    render: ({ row, lang }) =>
      (
        <span className=" text-xs md:text-sm tracking-wider ">
          {" "}
          {row.customer?.[lang]}{" "}
        </span>
      ) ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "status",
    header: "Status",
    expansion: "100px",
    render: ({ row }) => {
      const statusColors = {
        draft: "text-gray-500",
        pending: "text-amber-600",
        approved: "text-emerald-600",
        partially_received: "text-sky-600",
        received: "text-green-600",
        cancelled: "text-red-600",
      };

      return (
        <span className={`${statusColors[row.status]} text-xs md:text-sm`}>
          {row.status}
        </span>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "subtotal",
    header: "Subtotal",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "discount_amount",
    header: "Discount",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "tax_amount",
    header: "Tax",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "grand_total",
    header: "Total",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm underline underline-offset-2 hover:underline-offset-4 cursor-pointer">
        {Number(value)}
      </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "procedures",
    header: "procedures",
    isActions: false,
    expansion: "150px",
    render: ({ row, meta }) => {
      const actions = saleOrderActions[row.status] ?? [];

      return (
        <div className="flex justify-around">
          {actions.map(({ label, color, action }) => (
            <ActionButton
              key={label}
              label={label}
              color={color}
              onClick={() => meta?.[action]?.(row)}
            />
          ))}
        </div>
      );
    },
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "70px",
  },
];

export const saleOrderItemCols = [
  {
    key: "product",
    header: "Product",
    expansion: "80px",
    render: ({ row, lang }) => row.product?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "quantity",
    header: "quantity",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "unit_price",
    header: "unit price",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "subtotal",
    header: "Subtotal",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "discount_amount",
    header: "Discount",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "tax_amount",
    header: "Tax",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "total",
    header: "Total",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm underline underline-offset-2 hover:underline-offset-4 cursor-pointer">
        {Number(value)}
      </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "70px",
  },
];

export const saleShipmentCols = [
  {
    key: "shipment_number",
    header: "No.",
    expansion: "120px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "items_count",
    header: "Items No. ",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "subtotal",
    header: "Subtotal",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "discount_amount",
    header: "Discount",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "tax_amount",
    header: "Tax",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "grand_total",
    header: "Total",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm underline underline-offset-2 hover:underline-offset-4 cursor-pointer">
        {Number(value)}
      </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "shipment_date",
    header: "Date",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "70px",
  },
];

export const saleShipmentItemCols = [
  {
    key: "product",
    header: "Product",
    expansion: "80px",
    render: ({ row, lang }) => row?.product?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "quantity_ordered",
    header: "ordered qty",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "quantity_shipped",
    header: "shipped qty",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "unit_price",
    header: "unit price",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "subtotal",
    header: "Subtotal",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "discount_amount",
    header: "Discount",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "tax_amount",
    header: "Tax",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "total",
    header: "Total",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm underline underline-offset-2 hover:underline-offset-4 cursor-pointer">
        {Number(value)}
      </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

export const warehouseinventorycols = [
  {
    key: "product",
    header: "Product",
    // width: "80px",
    render: ({ row, lang }) => row?.product?.[lang] ?? "",
    width: 16,
    align: "left",
    export: true,
  },
  {
    key: "quantity",
    header: "quantity",
    // width: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 5,
    maxWidth: 8,
    align: "left",
    export: true,
  },
  {
    key: "reserved_quantity",
    header: "reserved quantity",
    // width: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 5,
    maxWidth: 8,
    align: "left",
    export: true,
  },
  {
    key: "minimum_quantity",
    header: "minimum quantity",
    // width: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 5,
    maxWidth: 8,
    align: "left",
    export: true,
  },
  {
    key: "maximum_quantity",
    header: "maximum quantity",
    // width: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 5,
    maxWidth: 8,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "100px",
    export: false,
  },
];

export const productinventorycols = [
  {
    key: "warehouse",
    header: "warehouse",
    // width: "80px",
    render: ({ row, lang }) => row?.warehouse?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "quantity",
    header: "quantity",
    // width: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "reserved_quantity",
    header: "reserved_quantity",
    // width: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "minimum_quantity",
    header: "minimum_quantity",
    // width: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "maximum_quantity",
    header: "maximum_quantity",
    // width: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "100px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

export const inventorytransactioncols = [
  {
    key: "type",
    header: "type",
    expansion: "60px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "quantity",
    header: "quantity",
    expansion: "180px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 12,
    maxWidth: 20,
    align: "left",
    export: true,
  },
  {
    key: "before_quantity",
    header: "before quantity",
    expansion: "180px",

    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 12,
    maxWidth: 20,
    align: "left",
    export: true,
  },
  {
    key: "after_quantity",
    header: "after  quantity",
    expansion: "180px",

    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 12,
    maxWidth: 20,
    align: "left",
    export: true,
  },
  {
    key: "created_at",
    header: "Date&Time",
    expansion: "200px",
    width: 12,
    maxWidth: 20,
    align: "left",
    export: true,
  },
];

export const departmentcols = [
  {
    key: "name",
    header: "Name",
    expansion: "110px",
    render: ({ row, lang }) => (
      <span className=" text-blue-700">{row.name?.[lang] ?? ""} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "careers_count",
    header: "Careers",
    expansion: "90px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "description",
    header: "Description",
    expansion: "200px",
    render: ({ row, lang }) => row.description?.[lang] ?? "",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "is_active",
    header: "Active",
    expansion: "90px",
    className: " text-center",
    render: ({ value }) => {
      return (
        <span
          className={`   py-0.5 rounded text-xs font-medium flex justify-center ${
            Boolean(value) == true ? "gbill" : "rbill"
          }`}
        >
          {Boolean(value) == true ? "Active" : "Inactive"}
        </span>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "actions",
    isActions: true,
    expansion: "100px",
  },
];

export const quotationcols = [
  {
    key: "quotation_number",
    header: "No.",
    expansion: "120px",
    className: "px-1",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "supplier",
    header: "supplier",
    expansion: "110px",
    render: ({ row, lang }) =>
      (
        <span className=" text-xs md:text-sm tracking-wider ">
          {" "}
          {row.supplier?.[lang]}{" "}
        </span>
      ) ?? "__",
    className: "px-1",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "issue_date",
    header: "Date",
    expansion: "100px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "valid_until",
    header: "Expiry Date",
    expansion: "100px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "subtotal",
    header: "subtotal",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "discount_amount",
    header: "discount",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "tax_amount",
    header: "tax",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "grand_total",
    header: "total",
    expansion: "80px",
    render: ({ value }) => (
      <span className=" text-xs md:text-sm"> {Number(value)} </span>
    ),
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "status",
    header: "status",
    expansion: "70px",
    width: 3,
    maxWidth: 4,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "70px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

export const customerquotationcols = [
  {
    key: "product",
    header: "Product",
    expansion: "160px",
    render: ({ row, lang }) => (
      <span className="text-xs md:text-sm tracking-wider">
        {row.product?.[lang] ?? "__"}
      </span>
    ),
    className: "px-1",
    width: 8,
    maxWidth: 14,
    align: "left",
    export: true,
  },
  {
    key: "quantity",
    header: "Qty",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm">{Number(value)}</span>
    ),
    width: 4,
    maxWidth: 6,
    align: "left",
    export: true,
  },
  {
    key: "unit_price",
    header: "Unit Price",
    expansion: "90px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm">{Number(value)}</span>
    ),
    width: 5,
    maxWidth: 8,
    align: "left",
    export: true,
  },
  {
    key: "subtotal",
    header: "Subtotal",
    expansion: "90px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm">{Number(value)}</span>
    ),
    width: 5,
    maxWidth: 8,
    align: "left",
    export: true,
  },
  {
    key: "discount_amount",
    header: "Discount",
    expansion: "90px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm">{Number(value)}</span>
    ),
    width: 5,
    maxWidth: 8,
    align: "left",
    export: true,
  },
  {
    key: "tax_amount",
    header: "Tax",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm">{Number(value)}</span>
    ),
    width: 4,
    maxWidth: 6,
    align: "left",
    export: true,
  },
  {
    key: "total",
    header: "Total",
    expansion: "90px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm font-medium">{Number(value)}</span>
    ),
    width: 5,
    maxWidth: 8,
    align: "left",
    export: true,
  },
];

export const rfqitemcols = [
  {
    key: "product",
    header: "Product",
    expansion: "150px",
    render: ({ row, lang }) => (
      <span className="text-xs md:text-sm tracking-wider">
        {row.product?.[lang] ?? "__"}
      </span>
    ),
    className: "px-1",
    width: 8,
    maxWidth: 14,
    align: "left",
    export: true,
  },
  {
    key: "quantity",
    header: "Qty",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm">{Number(value)}</span>
    ),
    width: 4,
    maxWidth: 6,
    align: "left",
    export: true,
  },
  {
    key: "estimated_price",
    header: "estimated Price",
    expansion: "80px",
    render: ({ value }) => (
      <span className="text-xs md:text-sm">{Number(value)}</span>
    ),
    width: 5,
    maxWidth: 8,
    align: "left",
    export: true,
  },

  {
    key: "remarks",
    header: "remarks",
    expansion: "200px",
    render: ({ value }) => <span className="text-xs md:text-sm">{value}</span>,
    width: 5,
    maxWidth: 8,
    align: "left",
    export: true,
  },
];

export const salesRFQcols = [
  {
    key: "reference_number",
    header: "reference_number",
    expansion: "160px",
    className: "px-1",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "status",
    header: "status",
    expansion: "80px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "requested_date",
    header: "request  date",
    expansion: "80px",
    render: ({ value }) => value ?? " __ ",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "updated_at",
    header: "last udpate",
    expansion: "80px",
    render: ({ value }) => value ?? " __ ",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "remarks",
    header: "remarks",
    expansion: "120px",
    render: ({ value }) => value ?? " __ ",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "procedures",
    header: "procedures",
    isActions: false,
    expansion: "150px",
    render: ({ row, meta }) => {
      const actions = salerfqActions[row.status] ?? [];
      return (
        <div className="flex justify-around">
          {actions.map(({ label, color, action }) => (
            <ActionButton
              key={label}
              label={label}
              color={color}
              onClick={() => meta?.[action]?.(row)}
            />
          ))}
        </div>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

export const allsalesRFQcols = [
  {
    key: "reference_number",
    header: "reference_number",
    expansion: "110px",
    className: "px-1",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "customer",
    header: "customer",
    expansion: "110px",
    render: ({ row, lang }) => row.customer?.[lang] ?? "__",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "requested_date",
    header: "request update",
    expansion: "100px",
    render: ({ value }) => value ?? " __ ",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "updated_at",
    header: "last update",
    expansion: "100px",
    render: ({ value }) => value ?? " __ ",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "remarks",
    header: "remarks",
    expansion: "140px",
    render: ({ value }) => value ?? " __ ",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "status",
    header: "status",
    expansion: "60px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "procedures",
    header: "procedures",
    isActions: false,
    expansion: "225px",
    render: ({ row, meta }) => {
      const actions = salesrfqActions[row.status] ?? [];
      return (
        <div className="flex justify-around">
          {actions.map(({ label, color, action }) => (
            <ActionButton
              key={label}
              label={label}
              color={color}
              onClick={() => meta?.[action]?.(row)}
            />
          ))}
        </div>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

export const RFQscols = [
  {
    key: "batch_number",
    header: "batch_number.",
    expansion: "120px",
    className: "px-1",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "warehouse",
    header: "warehouse",
    expansion: "120px",
    render: ({ row, lang }) =>
      (
        <span className=" text-xs md:text-sm tracking-wider ">
          {" "}
          {row.warehouse?.[lang]}{" "}
        </span>
      ) ?? "__",
    className: "px-1",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "requested_date",
    header: "request Date",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "expiry_date",
    header: "Expiry  Date",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "suppliers_count",
    header: "Suppliers No.",
    expansion: "80px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "70px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

export const RFQcols = [
  {
    key: "product",
    header: "product",
    expansion: "160px",
    render: ({ row, lang }) => row.product?.[lang] ?? "",
    className: "px-1",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "quantity",
    header: "quantity",
    expansion: "80px",

    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "estimated_price",
    header: "estimated price",
    expansion: "80px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "quoted_price",
    header: "quoted   price",
    expansion: "80px",
    render: ({ value }) => value ?? " __ ",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

// supplierrfqActions

export const supplierrfqscols = [
  {
    key: "warehouse",
    header: "warehouse",
    expansion: "80px",
    render: ({ row, lang }) => row?.warehouse?.[lang] ?? "__",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "requested_date",
    header: "Order Date",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "expiry_date",
    header: "Expiry  Date",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "updated_at",
    header: "Last Update",
    expansion: "130px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "status",
    header: "status",
    expansion: "70px",
    width: 3,
    maxWidth: 4,
    align: "left",
    export: true,
  },
  {
    key: "procedures",
    header: "procedures",
    isActions: false,
    expansion: "150px",
    render: ({ row, meta }) => {
      const actions = supplierrfqActions[row.status] ?? [];

      return (
        <div className="flex justify-around">
          {actions.map(({ label, color, action }) => (
            <ActionButton
              key={label}
              label={label}
              color={color}
              onClick={() => meta?.[action]?.(row)}
            />
          ))}
        </div>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

// rfqActions

export const RFQDetailscols = [
  {
    key: "supplier",
    header: "supplier",
    expansion: "80px",
    render: ({ row, lang }) => row?.supplier?.[lang] ?? "__",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "status",
    header: "status",
    expansion: "80px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },

  {
    key: "approved_at",
    header: "approved date",
    expansion: "80px",
    render: ({ value }) => value ?? " __ ",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "remarks",
    header: "remarks",
    expansion: "120px",
    render: ({ row }) => row?.remarks ?? "__",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "procedures",
    header: "procedures",
    isActions: false,
    expansion: "150px",
    render: ({ row, meta }) => {
      const actions = rfqActions[row.status] ?? [];
      return (
        <div className="flex justify-around">
          {actions.map(({ label, color, action }) => (
            <ActionButton
              key={label}
              label={label}
              color={color}
              onClick={() => meta?.[action]?.(row)}
            />
          ))}
        </div>
      );
    },
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
  {
    key: "actions",
    header: "Actions",
    isActions: true,
    expansion: "70px",
    width: 6,
    maxWidth: 10,
    align: "left",
    export: true,
  },
];

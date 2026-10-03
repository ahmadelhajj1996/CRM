import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export const changePasswordSchema = yup.object({
  current_password: yup.string().required("Current password is required"),

  new_password: yup
    .string()
    .required("New password is required")
    .min(8, "New password must be at least 8 characters"),

  new_password_confirmation: yup
    .string()
    .required("Please confirm your new password")
    .oneOf([yup.ref("new_password")], "Password confirmation does not match"),
});

export const careerSchema = yup.object({
  title: yup
    .string()
    .required("name is required")
    .max(255, "Max 255 characters"),

  description: yup.string().nullable(),

  min_salary: yup.number().required().min(0, "Min salary must be >= 0"),

  max_salary: yup.number().required().min(0, "Max salary must be >= 0"),

  is_active: yup.boolean().nullable().notRequired(),
});

export const employeeSchema = yup.object({
  name: yup.string().max(255, "Name must be at most 255 characters").required(),

  email: yup.string().email("Invalid email format").required(),

  password: yup
    .string()
    .nullable()
    .min(8, "Password must be at least 6 characters")
    .test("password-confirmed", "Passwords must match", function (value) {
      if (!value) return true;
      return value === this.parent.password_confirmation;
    }),

  password_confirmation: yup
    .string()
    .nullable()
    .oneOf([yup.ref("password"), null], "Passwords must match"),

  department_id: yup
    .number()
    .typeError("Department is required")
    .required("Department is required"),

  career_id: yup
    .number()
    .typeError("Career is required")
    .required("Career is required"),

  code: yup.string().nullable(),

  status: yup
    .string()
    .required("Status is required")
    .oneOf(["active", "inactive"]),

  hire_date: yup
    .date()
    .required("Hire date is required")
    .typeError("Invalid date"),

  salary: yup
    .number()
    .typeError("Salary must be a number")
    .required("Salary is required")
    .min(0, "Salary must be at least 0"),
});

export const departmentSchema = yup.object({
  name: yup.string().required("name is required").max(255),

  description: yup.string().nullable(),

  is_active: yup.boolean().required(),
});

export const productsSchema = yup.object({
  category_id: yup
    .number()
    .required("Category is required")
    .typeError("Category is required"),

  name: yup
    .string()
    .required("Name is required")
    .max(255, "Name must not exceed 255 characters"),

  description: yup.string().nullable(),

  status: yup
    .string()
    .required("Status is required")
    .oneOf(["draft", "published", "archived"], "Invalid status"),

  is_active: yup.boolean(),

  is_featured: yup.boolean(),
});

export const warehouseSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .max(255, "Name must not exceed 255 characters"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .max(255, "Email must not exceed 255 characters"),

  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\d{9,10}$/, "Phone number must contain only 9 or 10 digits"),

  address: yup
    .string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters")
    .max(500, "Address must not exceed 500 characters"),

  is_active: yup.boolean().required("Status is required").default(true),
});

export const rfqSchema = yup.object({
  supplier_ids: yup
    .array()
    .required("At least one supplier is required")
    .min(1, "At least one supplier is required")
    .of(yup.number().required("Supplier is required")),

  warehouse_id: yup.number().required("warehouse is required"),

  reference_number: yup
    .string()
    .nullable()
    .max(100, "Reference number must not exceed 100 characters"),

  remarks: yup.string().nullable(),

  items: yup
    .array()
    .required("At least one item is required")
    .min(1, "At least one item is required")
    .of(
      yup.object({
        product_id: yup.number().required("Product is required"),

        quantity: yup
          .number()
          .typeError("Quantity must be a number")
          .required("Quantity is required")
          .integer("Quantity must be an integer")
          .min(1, "Quantity must be bigger than 1"),

        estimated_price: yup
          .number()
          .typeError("Estimated price must be a number")
          .nullable()
          .min(0, "Estimated price cannot be negative"),

        remarks: yup.string().nullable(),
      }),
    ),
});

export const salerfqSchema = yup.object({
  customer_id: yup.number().required("customer is required"),

  items: yup
    .array()
    .required("At least one item is required")
    .min(1, "At least one item is required")
    .of(
      yup.object({
        product_id: yup.number().required("Product is required"),

        quantity: yup
          .number()
          .typeError("Quantity must be a number")
          .required("Quantity is required")
          .integer("Quantity must be an integer")
          .min(1, "Quantity must be bigger than 1"),

        estimated_price: yup
          .number()
          .typeError("Estimated price must be a number")
          .nullable()
          .min(0, "Estimated price cannot be negative"),

        remarks: yup.string().nullable(),
      }),
    ),
});

export const rfqreceiptSchema = yup.object({
  items: yup
    .array()
    .required("At least one item is required")
    .min(1, "At least one item is required")
    .of(
      yup.object({

        quantity_received: yup
          .number()
          .typeError("received Quantity  must be a number")
          .required("received Quantity is required")
          .min(0, "received Quantity should be > 1"),

      }),
    ),
});

export const advanceSchema = yup.object({
  employee_id: yup.number().required("Product is required"),

  amount: yup
    .number()
    .typeError("amount must be a number")
    .required("amount is required")
    .integer("amount must be an integer")
    .min(1, "amount must be bigger than 1"),

  reason: yup.string().nullable(),

  notes: yup.string().nullable(),
});


export const supplierSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .max(255, "Name must not exceed 255 characters"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .max(255, "Email must not exceed 255 characters"),

  phone: yup.string().required("Phone is required"),

  country: yup
    .string()
    .required("Country is required")
    .length(2, "Invalid country")
    .max(2, "Invalid country"),

  city: yup
    .string()
    .required("City is required")
    .max(255, "City must not exceed 255 characters"),

  tax_number: yup
    .string()
    .required("Tax number is required")
    .matches(/^\d+$/, "Tax number must contain only numbers")
    .min(5, "Tax number must be at least 5 digits")
    .max(20, "Tax number must not exceed 20 digits"),

  contact_person: yup
    .string()
    .required("Contact person is required")
    .min(2, "Contact person must be at least 2 characters")
    .max(255, "Contact person must not exceed 255 characters")
    .matches(
      /^[a-zA-Z\u0600-\u06FF\s]+$/,
      "Contact person must contain only letters",
    ),

  notes: yup
    .string()
    .nullable()
    .max(1000, "Notes must not exceed 1000 characters"),

  is_active: yup.boolean().required("Status is required").default(true),
});

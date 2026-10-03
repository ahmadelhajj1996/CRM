import PropTypes from "prop-types";
import clsx from "clsx";
import { Info, Notebook, Receipt } from "lucide-react";
import FilterPanel from '../forms/FilterPanel'

const COLOR_THEMES = {
  sky: {
    surface: "bg-sky-50 text-sky-600",
    iconBadge: "bg-white text-sky-600",
    accent: "text-sky-600",
  },
  yellow: {
    surface: "bg-yellow-50 text-yellow-600",
    iconBadge: "bg-white text-yellow-600",
    accent: "text-yellow-600",
  },
  green: {
    surface: "bg-green-50 text-green-600",
    iconBadge: "bg-white text-green-600",
    accent: "text-green-600",
  },
  rose: {
    surface: "bg-rose-50 text-rose-600",
    iconBadge: "bg-white text-rose-600",
    accent: "text-rose-600",
  },
  violet: {
    surface: "bg-violet-50 text-violet-600",
    iconBadge: "bg-white text-violet-600",
    accent: "text-violet-600",
  },
  gray: {
    surface: "bg-gray-50 text-gray-600",
    iconBadge: "bg-white text-gray-600",
    accent: "text-gray-600",
  },
};


export default function PaymentSummaryCard({
  title = "Invoice Payments",
  color = "sky",
  headerIcon: HeaderIcon = Receipt,
  totalIcon: TotalIcon,
  totalValue = 0,
  currency = "AED",
  formatValue = (v) => Number(v).toFixed(2),
  breakdown = [],
  filterProps = {},
  className = "",
}) {
  const theme = COLOR_THEMES[color] || COLOR_THEMES.sky;

  return (
    <div
      className={clsx(
        "app-bordered p-6 rounded-lg font-semibold flex flex-col gap-y-4",
        theme.surface,
        className,
      )}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <div className={clsx("rounded-full p-3 app-bordered", theme.iconBadge)}>
          <HeaderIcon />
        </div>
      </div>

      <FilterPanel {...filterProps} />

      <div className="mt-6 text-center flex justify-center items-center gap-x-4">
        {TotalIcon && <TotalIcon className={theme.accent} />}
        <div className={clsx("text-sm font-semibold", theme.accent)}>
          {formatValue(totalValue)} {currency}
        </div>
      </div>

      {breakdown.length > 0 && (
        <div className="flex justify-between items-center flex-wrap gap-y-3">
          {breakdown.map((item) => (
            <div key={item.label} className="flex flex-col gap-y-1">
              <span className="text-gray-400 text-xs">{item.label}</span>
              <span className="text-sm tracking-wider">
                {item.formatValue
                  ? item.formatValue(item.value)
                  : formatValue(item.value)}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center gap-x-[3px] justify-center text-sm text-gray-500">
            <Info className=" w-3 h-3" />
             <span className=" mb-2"> </span> Total invoice payments (cash and bank)
      </div>
    </div>
  );
}

PaymentSummaryCard.propTypes = {
  title: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(COLOR_THEMES)),
  headerIcon: PropTypes.elementType,
  totalIcon: PropTypes.elementType,
  totalValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.node,
  formatValue: PropTypes.func,
  breakdown: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      formatValue: PropTypes.func,
    }),
  ),
  filterProps: PropTypes.object, // forwarded as-is to <FilterPanel {...filterProps} />
  className: PropTypes.string,
};

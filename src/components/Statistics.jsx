const colorMap = {
  info: "bg-blue-500 ",
  success: "bg-green-500 ",
  danger: "bg-red-500 ",
  warning: "bg-yellow-500 ",
  white: "bg-white"
};

function Statistics({ items, iconcolor = "text-white" }) {
  return (
    <>
      {items.map(({ icon: Icon, title, description, type }, i) => (
        <div key={i} className="bg-white rounded-md">
          <div className="p-4 flex items-center gap-6 w-full">
            <div
              className={`p-3 rounded-lg ${
                colorMap[type] ?? colorMap.warning
              }`}
            >
              <Icon size={20} className={iconcolor} />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <p className="title">{title}</p>
              <span className="description w-full">{description}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Statistics;

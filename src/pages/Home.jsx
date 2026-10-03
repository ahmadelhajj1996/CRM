import { Send } from "lucide-react";
import Breadcrumbs from "../components/sections/Breadcrumbs";
import Statistics from "../components/Statistics";
import { useTranslation } from "react-i18next";
import useTransactions from "../hooks/Data/useTransactions";
import { useModal } from "../hooks/useModal";

function Home() {

  const { t } = useTranslation();
  const {i18n} =   useTranslation()
  const {  modalMode, modalData,  closeModal } = useModal();

  const { summary  } = useTransactions({modalMode, modalData, closeModal , i18n});
  const {total_income  , total_expense , profit , balance} = summary;
 
  console.log("" , total_expense);
  

   return (
    <>
      <Breadcrumbs title={t("home")} show={false} />
      <div className=" mt-18 flex flex-col gap-y-10 md:ms-18    ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          <Statistics
            items={[
              {
                icon: Send,
                title: balance,
                description: t("counter"),
                type: "info",
              },
              {
                icon: Send,
                title: total_income,
                description: t("sum_income"),
                type: "success",
              },
              {
                icon: Send,
                title: total_expense,
                description: t("sum_expense"),
                type: "danger",
              },

              {
                icon: Send,
                title: profit,
                description: t("result"),
                type: "info",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Home;

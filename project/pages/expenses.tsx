import { VFC } from "react";
import {Expenses} from "../components/Expenses"
import { Layout } from "../components/Layout";

const ExpensesPage: VFC = () => {
  return(
    <Layout title="Expenses">
      <Expenses />
    </Layout>
  )
}
export default ExpensesPage
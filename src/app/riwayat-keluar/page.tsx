

import Main from "@/components/main/Main";
import styles from "./page.module.css";
import { Metadata } from "next";
import InputPengeluaran from "./input-pengeluaran";
import CardPengeluaran from "./card-pengeluaran";
import CreatePengeluaran from "./create-pengeluaran";

export const metadata: Metadata = {
  title: "Riwayat Keluar",
  description: "Halaman Riwayat Uang Keluar",
};

export default function RiwayatKeluarPage() {

  return (
    <Main>
      <div className={styles.container}>
        <CreatePengeluaran />
        <InputPengeluaran />
        <CardPengeluaran />
      </div>
    </Main>
  );
}
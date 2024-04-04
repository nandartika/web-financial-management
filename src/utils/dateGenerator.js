function generateDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Tambahkan 0 di depan jika bulan < 10
  const day = String(today.getDate()).padStart(2, "0"); // Tambahkan 0 di depan jika tanggal < 10
  return `${year}-${month}-${day}`;
}

export default generateDate;

import ShopContent from "../../components/shop-content/ShopContent";

export default function ShopPage() {
  return (
    <>
      <ShopContent>
        <ShopContent.Title>New Arrivals</ShopContent.Title>
        <ShopContent.SideBar />
        <ShopContent.Products></ShopContent.Products>
      </ShopContent>
    </>
  );
}

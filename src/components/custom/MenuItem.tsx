import { MenuItem as MenuItemType } from "../../types/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card
      className="cursor-pointer relative group overflow-hidden hover:bg-gray-50 transition-all duration-300"
      onClick={addToCart}
    >
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        £{(menuItem.price / 100).toFixed(2)}
      </CardContent>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2 opacity-0 group-hover:opacity-100 uppercase font-semibold text-slate-700">
        click to add to cart
      </div>
    </Card>
  );
};

export default MenuItem;

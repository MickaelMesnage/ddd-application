import ItemId from "./itemId";
import ItemStatus from "./itemStatus";
import ItemSubject from "./itemSubject";

type Item = {
    subject: ItemSubject;
    status: ItemStatus;
    id: ItemId;
};

export default Item;

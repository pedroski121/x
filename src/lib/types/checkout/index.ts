export interface ILogisticsCompanyLocation {
    logisticsCompany: string;
    state: string;
    city: string;
    address: string;
    _id: string;
}
export interface IPickUpStation {
    logisticsCompany: string;
    state: string;
    city: string;
    address: string;
    _id: string;
}

export interface IOrderProductDetails {
    productID: string,
    quantity: number,
    size: string,
    amountPaid: number,
    currentStatus: string,
    pendingDate?: string,
    confirmedDate?: string,
    shippedDate?: string,
    deliveredDate?: string,
}
export interface IOrder {
    userID: string;
    orderID: string;
    productDetails: IOrderProductDetails[];
    pickUpStationID: string;
    orderInitiationTime: string;
    totalAmountPaid: number;

    referenceID: string
}


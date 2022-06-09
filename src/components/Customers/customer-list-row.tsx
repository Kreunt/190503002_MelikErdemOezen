import React from 'react';

interface CustomerListRowUI {
    position: number;
    customer: {
        id: number;
        name: string;
        age: number;
        address: string;
        phone: string;
        dateOfSubscription: string;
        dateOfSubscriptionEnd: string;
        paidAmount: number;
    };
    handleCustomerRemove: (id: number, name:string) => void;
    handleCustomerUpdate: (customer: any) => void;
    handleCustomerEditClick: (event: any, customer: any) => void;
}

export const CustomerListRow = (props: CustomerListRowUI) => {

    return (
        <tr className='table-row'>
            <td className='table-item'>
                {props.position}
            </td>
            {Object.keys(props.customer)
                .slice(1)
                .map((key: string, index: number) => {
                    return (
                        <td key={index} className='table-item' >
                            {props.customer[key as keyof typeof props.customer]}
                        </td>
                    );
                })
            }
            <td className='table-item'>
                <button
                    className='btn btn-edit'
                    onClick={(event) => props.handleCustomerEditClick(event, props.customer)}>
                    Edit Customer
                </button>
            </td>
            <td className='table-item'>
                <button
                    className='btn btn-remove'
                    onClick={() => props.handleCustomerRemove(props.customer.id, props.customer.name)}>
                    Remove Customer
                </button>
            </td>
        </tr>
    )
}
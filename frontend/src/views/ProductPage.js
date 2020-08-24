import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
    const productId = useParams();
    const [product, SetProduct] = useState({})

    useEffect(() => {
        SetProduct({
            id: productId,
            name: "test name",
            description: "descrizione",
            price: 123.33
        })

    }, [])

    return (
        <div>
            <h2> {product.name} </h2>
        </div>
    )
}

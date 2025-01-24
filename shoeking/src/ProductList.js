import React from 'react';
import "./App.css";

const productList = [
    { id: 1, name: "브랜드 A", price: "35,000원", info: "편안하고 착용감이 좋은 신발", image: "/img/1.jpeg" },
    { id: 2, name: "브랜드 A", price: "25,000원", info: "힙한 컬러가 매력적인 신발", image: "/img/2.jpeg" },
    { id: 3, name: "브랜드 B", price: "35,000원", info: "편안하고 착용감이 좋은 신발", image: "/img/3.jpeg" },
    { id: 4, name: "브랜드 B", price: "35,000원", info: "힙한 컬러가 매력적인 신발", image: "/img/4.jpeg" },
    { id: 5, name: "브랜드 C", price: "35,000원", info: "편안하고 착용감이 좋은 신발", image: "/img/5.jpeg" },
    { id: 6, name: "브랜드 C", price: "35,000원", info: "힙한 컬러가 매력적인 신발", image: "/img/6.jpeg" },
];

const ProductList = () => {
    return (
        <div style={styles.container}>
            <div style={styles.header}></div>
            <h1>신발 상품 목록</h1>
            <p>현재 6개의 상품이 있습니다.</p>

            <div className="grid-container">
                {productList.map((product) => (
                    <div key={product.id} className="grid-total">
                        <img src={product.image} className='product_img'></img>
                        <div className='grid-script'>
                            <div className='product_name'>{product.name}</div>
                            <div className='product_info'>{product.info}</div>
                            <div className='product_price'>{product.price}</div>
                            <button className='product_btn'>담기</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 스타일 파트트
const styles = {
    container: {
        width: '430px',
        height: '1000px',
        top: '-700px',
        left: '2057px',
    },
    header: {
        width: '429px',
        height: '69px',
        padding_top: '10px',
        padding_bottom: '10px',
        padding_left: '347px',
        background: 'black',

    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
    },
};

export default ProductList;

import React from 'react';

function ResultBox() {
  return (
    <div className="result-box">
      <div className="result-item">

        <div className="result-sub-box">
          <p className="box-header">Basic Info</p>
          <div className="box-content">
          <div className="box-content-left">
            <p>Pair created at</p>
            <p>Symbol</p>
            <p>Dex ID</p>
            <p>Pair Address</p>
          </div>
          <div className="box-content-right">
            <p>#######</p>
            <p>#######</p>
            <p>#######</p>
            <p>#######</p>
          </div>
          </div>
          <div className="box-footer">
            <img src="/Allimages/Vector (9).png" alt="Box Type Icon" className="box-type-icon" />
          </div>
        </div>

        <div className="result-sub-box">
          <p className="box-header">Base Token</p>
          <div className="box-content">
          <div className="box-content-left">
            <p>Name</p>
            <p>Symbol</p>
            <p>Address</p>
          </div>
          <div className="box-content-right">
            <p>#######</p>
            <p>#######</p>
            <p>#######</p>
          </div>
          </div>
          <div className="box-footer">
            <img src="/Allimages/Vector (7).png" alt="Box Type Icon" className="box-type-icon" />
          </div>
        </div>

        <div className="result-sub-box">
          <p className="box-header">Quote Token</p>
          <div className="box-content">
          <div className="box-content-left">
            <p>Name</p>
            <p>Symbol</p>
            <p>Address</p>
          </div>
          <div className="box-content-right">
            <p>#######</p>
            <p>#######</p>
            <p>#######</p>
          </div>
          </div>
          <div className="box-footer">
            <img src="/Allimages/Vector (7).png" alt="Box Type Icon" className="box-type-icon" />
          </div>
        </div>

        <div className="result-sub-box">
          <p className="box-header">Price</p>
          <div className="box-content">
          <div className="box-content-left">
            <p>Price Native</p>
            <p>Price USD</p>
          </div>
          <div className="box-content-right">
            <p>#######</p>
            <p>#######</p>
          </div>
          </div>
          <div className="box-footer">
            <img src="/Allimages/Vector (8).png" alt="Box Type Icon" className="box-type-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultBox;

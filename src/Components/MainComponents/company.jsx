import React from 'react';
import styled from 'styled-components';
import {TITLE} from './ProductComponent/products';

class Company extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <TITLE>Company</TITLE>
      <Infomation>
        <dt>社名</dt>
        <dd>株式会社ファニチャーデザイン</dd>
        <dt>住所</dt>
        <dd>〒107-0062 東京都港区南青山１丁目××××××</dd>
        <dt>設立</dt>
        <dd>XXXX年XX月</dd>
        <dt>資本金</dt>
        <dd>XXXX万円</dd>
        <dt>従業員数</dt>
        <dd>XX名</dd>
        <dt>事業内容</dt>
        <dd>
          <ul>
            <li>家具、インテリアの企画・生産</li>
            <li>家具、インテリアの販売</li>
            <li>店舗の企画・デザイン・設計</li>
          </ul>
        </dd>
      </Infomation>
      <Map>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2914382280856!2d139.72342666557796!3d35.669825288204194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c820ac932eb%3A0xc68079dd10afd971!2z44CSMTA3LTAwNjIg5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGx77yR5LiB55uu!5e0!3m2!1sja!2sjp!4v1611987713735!5m2!1sja!2sjp" title="map"></iframe>
      </Map>
      </React.StrictMode>
    );
  }
}

const Infomation = styled.dl`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  color: #333;
  margin-bottom: 50px;
  dt {
    width: 30%;
    border-bottom: solid 1px #dcdbdb;
    padding: 20px 10px;
  }

  dd {
    width: 70%;
    border-bottom: solid 1px #dcdbdb;
    padding: 20px 10px;
  }

  dt:nth-of-type(6)  {
    border-bottom: none;
  }

  dd:nth-of-type(6)  {
    border-bottom: none;
  }
`;

const Map = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    border-radius: 50%;
  }
`;


export default Company;

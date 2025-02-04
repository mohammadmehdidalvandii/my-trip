import React from 'react';
import './Feature.css';
import { AiOutlineGlobal } from "react-icons/ai";
import { FaMedal } from 'react-icons/fa';
import { RiCustomerService2Line } from 'react-icons/ri';


const  Feature:React.FC = ()=>{
  return (
    <section className="feature">
        <div className="containers">
            <div className="row row-gap-3">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="feature_item">
                        <span className="feature_item_icon"><AiOutlineGlobal/></span>
                        <div className="feature_item_content">
                            <h4 className="feature_item_title">پوشش جهانی</h4>
                            <p className="feature_item_paraph">این یک واقعیت ثابت شده است که خواندن توسط خواندنی ها منحرف می شود
                                     محتوایی که به چیدمان آن نگاه می کند.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="feature_item">
                        <span className="feature_item_icon"><FaMedal/></span>
                        <div className="feature_item_content">
                            <h4 className="feature_item_title">بهترین کیفیت خدمات</h4>
                            <p className="feature_item_paraph">این یک واقعیت ثابت شده است که خواندن توسط خواندنی ها منحرف می شود
                                     محتوایی که به چیدمان آن نگاه می کند.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="feature_item">
                        <span className="feature_item_icon"><RiCustomerService2Line/></span>
                        <div className="feature_item_content">
                            <h4 className="feature_item_title">خدمات مشتری 24/7</h4>
                            <p className="feature_item_paraph">این یک واقعیت ثابت شده است که خواندن توسط خواندنی ها منحرف می شود
                                     محتوایی که به چیدمان آن نگاه می کند.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature
import React, { useRef, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';

import style from './../App.css';
import BookADeliveryForm from './BookADeliveryForm';
import DeliveryTracker from './DeliveryTracker';

import phoneImage from './asset4.png';

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
// const useMountEffect = (fun) => useEffect(fun, []);

class PageBody extends Component {
  render() {
    return (
      <div className={style.PageBody}>
        <section className={style.section1}>
          <span>
            <div className={style.text}>
              <h1>
                A cheaper, faster <span>delivery</span> solution from anywhere
                <span>.</span>
              </h1>
              <p>
                We are here to rescue you. By using Express Delivery, your goods
                will arise in less than 90 minutes.
              </p>
              <DeliveryTracker
                delivery={this.props.delivery}
                compareTrackingId={this.props.compareTrackingID}
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1150.54"
              height="550.25"
              viewBox="0 0 4111.54 1992.25"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Слой_1" data-name="Слой 1">
                  <g id="GROUND">
                    <line
                      x1="1597.27"
                      y1="1989.75"
                      x2="3009.3"
                      y2="1989.75"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <line
                      x1="88.35"
                      y1="1720.28"
                      x2="1481.96"
                      y2="1720.28"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <line
                      x1="3224.69"
                      y1="1989.75"
                      x2="3934.69"
                      y2="1989.75"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                  </g>
                  <g id="LAMP">
                    <path
                      d="M1220.51,1602.53V137.28A134.78,134.78,0,0,1,1355.3,2.5H1671"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <path
                      d="M1219.7,137.28A134.78,134.78,0,0,0,1084.92,2.5H769.18"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="1502.47"
                      y="18.15"
                      width="168.56"
                      height="36.76"
                      rx="13.72"
                      fill="#ffc200"
                    />
                    <rect
                      x="769.18"
                      y="18.15"
                      width="168.56"
                      height="36.76"
                      rx="13.72"
                      fill="#ffc200"
                    />
                  </g>
                  <g id="STORAGE">
                    <polygon
                      points="1437 1171.8 1437 570.56 2313.27 304.07 3182.48 570.56 3182.48 1171.8 1437 1171.8"
                      fill="#fff"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="3181.62"
                      y="570.56"
                      width="605.06"
                      height="601.24"
                      fill="#fff"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <polygon
                      points="3785.66 570.56 2916.44 304.07 2312.4 304.07 3181.62 570.56 3785.66 570.56"
                      fill="#fff"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="5"
                    />
                    <rect
                      x="3291.35"
                      y="711.14"
                      width="419.31"
                      height="37.11"
                      fill="#98c8db"
                    />
                    <rect
                      x="3280.67"
                      y="702.77"
                      width="419.31"
                      height="37.11"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <line
                      x1="3490.95"
                      y1="739.88"
                      x2="3490.95"
                      y2="702.77"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <polygon
                      points="3079.88 593.13 3079.88 1171.8 1538.67 733.04 1538.67 593.13 3079.88 593.13"
                      fill="#98c8db"
                    />
                    <rect
                      x="1538.67"
                      y="593.13"
                      width="1541.21"
                      height="578.67"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="1538.67"
                      y="593.13"
                      width="1542.14"
                      height="94.26"
                      fill="#fff"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <line
                      x1="3080.3"
                      y1="616.47"
                      x2="1538.67"
                      y2="616.47"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <line
                      x1="3080.3"
                      y1="640.08"
                      x2="1538.67"
                      y2="640.08"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <line
                      x1="3080.3"
                      y1="663.68"
                      x2="1538.67"
                      y2="663.68"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <line
                      x1="2604.87"
                      y1="687.38"
                      x2="2604.87"
                      y2="1171.8"
                      fill="none"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="2917.87"
                      y="1074.27"
                      width="156.5"
                      height="92.25"
                      fill="#59221d"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="2917.87"
                      y="982.01"
                      width="156.5"
                      height="92.25"
                      fill="#59221d"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="2761.37"
                      y="1074.27"
                      width="156.5"
                      height="92.25"
                      fill="#fff"
                      stroke="#ffc200"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="2761.12"
                      y="982.01"
                      width="159"
                      height="92.25"
                      fill="#ffc200"
                    />
                    <rect
                      x="2761.37"
                      y="797.51"
                      width="156.5"
                      height="92.25"
                      fill="#fff"
                      stroke="#ffc200"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="2917.87"
                      y="889.76"
                      width="156.5"
                      height="92.25"
                      fill="#fff"
                      stroke="#ffc200"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="2448.38"
                      y="1074.27"
                      width="156.5"
                      height="92.25"
                      fill="#59221d"
                      stroke="#59221d"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="2604.87"
                      y="1074.27"
                      width="156.5"
                      height="92.25"
                      fill="#fff"
                      stroke="#ffc200"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="2604.87"
                      y="982.01"
                      width="156.5"
                      height="92.25"
                      fill="#fff"
                      stroke="#ffc200"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <rect
                      x="2761.37"
                      y="889.76"
                      width="156.5"
                      height="92.25"
                      fill="#fff"
                      stroke="#ffc200"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                    />
                    <circle cx="2839.38" cy="902.87" r="4.98" fill="#ffc200" />
                    <circle cx="2807.99" cy="902.87" r="4.98" fill="#ffc200" />
                    <circle cx="2870.77" cy="902.87" r="4.98" fill="#ffc200" />
                    <circle cx="2902.16" cy="902.87" r="4.98" fill="#ffc200" />
                    <circle cx="2776.6" cy="902.87" r="4.98" fill="#ffc200" />
                    <circle cx="2823.69" cy="919.23" r="4.98" fill="#ffc200" />
                    <circle cx="2792.3" cy="919.23" r="4.98" fill="#ffc200" />
                    <circle cx="2855.08" cy="919.23" r="4.98" fill="#ffc200" />
                    <circle cx="2886.47" cy="919.23" r="4.98" fill="#ffc200" />
                    <circle cx="2839.38" cy="935.58" r="4.98" fill="#ffc200" />
                    <circle cx="2807.99" cy="935.58" r="4.98" fill="#ffc200" />
                    <circle cx="2870.77" cy="935.58" r="4.98" fill="#ffc200" />
                    <circle cx="2902.16" cy="935.58" r="4.98" fill="#ffc200" />
                    <circle cx="2776.6" cy="935.58" r="4.98" fill="#ffc200" />
                    <circle cx="2823.69" cy="951.94" r="4.98" fill="#ffc200" />
                    <circle cx="2792.3" cy="951.94" r="4.98" fill="#ffc200" />
                    <circle cx="2855.08" cy="951.94" r="4.98" fill="#ffc200" />
                    <circle cx="2886.47" cy="951.94" r="4.98" fill="#ffc200" />
                    <circle cx="2839.38" cy="968.29" r="4.98" fill="#ffc200" />
                    <circle cx="2807.99" cy="968.29" r="4.98" fill="#ffc200" />
                    <circle cx="2870.77" cy="968.29" r="4.98" fill="#ffc200" />
                    <circle cx="2902.16" cy="968.29" r="4.98" fill="#ffc200" />
                    <circle cx="2776.6" cy="968.29" r="4.98" fill="#ffc200" />
                    <circle cx="2706.04" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2739.35" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2772.66" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2805.97" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2839.28" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2872.59" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2905.9" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2472.88" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2439.58" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2506.19" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2539.5" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2572.81" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2606.12" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2639.43" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2672.74" cy="323.89" r="5.29" fill="#98c8db" />
                    <circle cx="2788.35" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2821.65" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2854.96" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2888.27" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2921.58" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2954.89" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2988.2" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2555.19" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2521.88" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2588.49" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2621.8" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2655.11" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2688.42" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2721.73" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2755.04" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2488.57" cy="341.16" r="5.29" fill="#98c8db" />
                    <circle cx="2805.54" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2838.85" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2872.16" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2905.47" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2938.78" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2972.08" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="3005.39" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2572.38" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2539.07" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2605.69" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2639" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2672.31" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2705.62" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2738.92" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2772.23" cy="358.43" r="5.29" fill="#98c8db" />
                    <circle cx="2888.87" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2922.18" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2955.49" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2988.8" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="3022.1" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="3055.41" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="3088.72" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2655.71" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2622.4" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2689.02" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2722.33" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2755.64" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2788.94" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2822.25" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2855.56" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2589.09" cy="373.97" r="5.29" fill="#98c8db" />
                    <circle cx="2939.92" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="2973.22" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="3006.53" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="3039.84" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="3073.15" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="3106.46" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="3139.77" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="2706.76" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="2673.45" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="2740.06" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="2773.37" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="2806.68" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="2839.99" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="2873.3" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="2906.61" cy="391.59" r="5.29" fill="#98c8db" />
                    <circle cx="3023.24" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="3056.55" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="3089.86" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="3123.17" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="3156.48" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="3189.79" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="3223.09" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="2790.08" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="2756.77" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="2823.39" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="2856.7" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="2890.01" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="2923.32" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="2956.63" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="2989.93" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="2723.47" cy="409.2" r="5.29" fill="#98c8db" />
                    <circle cx="3073.26" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="3106.57" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="3139.88" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="3173.19" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="3206.5" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="3239.81" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="3273.11" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="2840.1" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="2806.79" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="2873.41" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="2906.72" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="2940.03" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="2973.34" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="3006.65" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="3039.95" cy="426.81" r="5.29" fill="#98c8db" />
                    <circle cx="3123.77" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="3157.08" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="3190.38" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="3223.69" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="3257" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="3290.31" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="3323.62" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="2890.61" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="2857.3" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="2923.92" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="2957.22" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="2990.53" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="3023.84" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="3057.15" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="3090.46" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="2823.99" cy="444.43" r="5.29" fill="#98c8db" />
                    <circle cx="3175.84" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3209.15" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3242.46" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3275.76" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3309.07" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3342.38" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3375.69" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="2942.68" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="2909.37" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="2975.99" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3009.3" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3042.6" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3075.91" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3109.22" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3142.53" cy="462.04" r="5.29" fill="#98c8db" />
                    <circle cx="3259.17" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3292.47" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3325.78" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3359.09" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3392.4" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3425.71" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3459.02" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3026.01" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="2992.7" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3059.31" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3092.62" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3125.93" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3159.24" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3192.55" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3225.86" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="2959.39" cy="480.17" r="5.29" fill="#98c8db" />
                    <circle cx="3311.24" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3344.55" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3377.85" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3411.16" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3444.47" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3477.78" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3511.09" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3078.08" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3044.77" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3111.39" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3144.69" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3178" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3211.31" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3244.62" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3277.93" cy="498.3" r="5.29" fill="#98c8db" />
                    <circle cx="3395.59" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3428.9" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3462.21" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3495.52" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3528.83" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3562.13" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3162.43" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3129.12" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3195.74" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3229.05" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3262.36" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3295.67" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3328.97" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3362.28" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3095.81" cy="516.43" r="5.29" fill="#98c8db" />
                    <circle cx="3497.14" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3530.45" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3563.76" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3597.07" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3630.37" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3663.68" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3696.99" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3263.98" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3230.67" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3297.29" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3330.6" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3363.91" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3397.21" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3430.52" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3463.83" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3197.36" cy="552.7" r="5.29" fill="#98c8db" />
                    <circle cx="3413.81" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3447.12" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3480.43" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3513.74" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3547.05" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3580.36" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3613.66" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3180.65" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3147.34" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3213.96" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3247.27" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3280.58" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3313.89" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3347.2" cy="534.57" r="5.29" fill="#98c8db" />
                    <circle cx="3380.5" cy="534.57" r="5.29" fill="#98c8db" />
                  </g>
                  <g id="SMALL_CAR" data-name="SMALL CAR">
                    <g id="CAR">
                      <circle
                        cx="3385.34"
                        cy="1202.47"
                        r="23.81"
                        fill="#59221d"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M3587.62,1170V958.34h-103a70.49,70.49,0,0,0-61.2,35.5l-76.27,133.36L3415.7,1170Z"
                        fill="#fff"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M3587.62,1170V958.34h-19.35a70.49,70.49,0,0,0-61.2,35.5L3430.8,1127.2l68.52,42.77Z"
                        fill="#fff"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M3590.62,1167v23.88a11.74,11.74,0,0,1-11.74,11.73H3349.71a11.73,11.73,0,0,1-11.51-9.43c-2.82-14-5.7-43.29,7-68h88.62l68.52,41.81Z"
                        fill="#ffc200"
                      />
                      <path
                        d="M3412.05,1202.62a33.35,33.35,0,0,1,66.69,0Z"
                        fill="#59221d"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <circle
                        cx="3445.4"
                        cy="1202.47"
                        r="23.81"
                        fill="#fff"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <circle
                        cx="3547.5"
                        cy="1202.47"
                        r="23.81"
                        fill="#fff"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <polyline
                        points="3249.64 1141.41 3347.7 1202.62 3410.99 1202.62 3312.93 1141.41 3160.81 1141.41"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                    </g>
                    <g id="BOXES">
                      <rect
                        x="3140.19"
                        y="1060.93"
                        width="174.92"
                        height="77.86"
                        fill="#ffc200"
                      />
                      <rect
                        x="3160.79"
                        y="973.01"
                        width="151.59"
                        height="85.41"
                        fill="#fff"
                        stroke="#ffc200"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <rect
                        x="3160.79"
                        y="887.71"
                        width="151.59"
                        height="85.41"
                        fill="#fff"
                        stroke="#ffc200"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <polygon
                        points="3163.14 1060.92 3315.12 1060.92 3315.12 1082.41 3163.14 1060.92"
                        fill="#a74602"
                      />
                      <polygon
                        points="3310.03 975.42 3310.03 1055.13 3270.52 1055.13 3270.52 991.86 3163.8 977.79 3163.8 975.42 3310.03 975.42"
                        fill="#98c8db"
                      />
                    </g>
                  </g>
                  <g id="TRUCK">
                    <g id="TRUCK-2" data-name="TRUCK">
                      <g id="TRAILER">
                        <rect
                          x="985.69"
                          y="1483.08"
                          width="1511.08"
                          height="26.04"
                          fill="#59221d"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <rect
                          x="985.69"
                          y="842.01"
                          width="149.58"
                          height="641.07"
                          fill="#59221d"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <rect
                          x="1135.27"
                          y="842.01"
                          width="1361.5"
                          height="641.07"
                          fill="#fff"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <rect
                          x="1140.61"
                          y="908.15"
                          width="1353.52"
                          height="26.32"
                          fill="#f5bbbb"
                        />
                        <rect
                          x="1140.61"
                          y="1370.76"
                          width="1353.52"
                          height="26.32"
                          fill="#f5bbbb"
                        />
                      </g>
                      <g id="CABIN">
                        <path
                          d="M18.39,1559.72H67.76a0,0,0,0,1,0,0v56.12a0,0,0,0,1,0,0H3.18a0,0,0,0,1,0,0v-40.91A15.21,15.21,0,0,1,18.39,1559.72Z"
                          fill="#fff"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M282.8,1720.28c-50.6,0-91.62-50.22-91.62-112.18s41-112.17,91.62-112.17H218.09c-50.6,0-91.62,50.22-91.62,112.17s41,112.18,91.62,112.18Z"
                          fill="#a74602"
                        />
                        <ellipse
                          cx="282.8"
                          cy="1608.1"
                          rx="91.62"
                          ry="112.18"
                          fill="#59221d"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M485.08,1030.89l13.58-16.75h192.7L727.66,972c66.41-73.33,154.05-117.79,249-133.27h9.09v646.55h234.84v142.4H794.12v-47.23c0-66.59-52.81-120.55-117.94-120.55s-117.95,54-117.95,120.55v45.06H268.08V1439.41c0-44.28,26.3-84.11,66.46-100.67L599,1220.91a15.47,15.47,0,0,0,12.06-8.94l65.32-143.68a26.85,26.85,0,0,0-24.44-38Z"
                          fill="#ffc200"
                        />
                        <path
                          d="M978.66,840.81c-94.9,15.49-182.54,59.94-248.95,133.27l-36.3,42.11H500.71l22.72-26.35c84.17-92.94,202.45-149,326.38-149Z"
                          fill="#fff"
                          stroke="#ffc200"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M613.15,1217.91,337.53,1337.5c-42,17.32-69.45,58.94-69.45,105.2v182.84H67.58V1432.37c0-40.91,21.56-78.66,56.42-98.78l215.43-115.68Z"
                          fill="#fff"
                          stroke="#ffc200"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M268.08,1559.72h89.07a15.21,15.21,0,0,1,15.21,15.21v40.91a0,0,0,0,1,0,0H268.08a0,0,0,0,1,0,0v-56.12A0,0,0,0,1,268.08,1559.72Z"
                          fill="#fff"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M267,1559.72H334.9a15.21,15.21,0,0,1,15.21,15.21v40.91a0,0,0,0,1,0,0H267a0,0,0,0,1,0,0v-56.12A0,0,0,0,1,267,1559.72Z"
                          fill="#fff"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <rect
                          x="1011.34"
                          y="1502.08"
                          width="149.58"
                          height="71.81"
                          rx="14.52"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <line
                          x1="372.36"
                          y1="1591.54"
                          x2="1186.49"
                          y2="1591.54"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M2278.9,1720.28c-50.6,0-91.62-50.22-91.62-112.18s41-112.17,91.62-112.17h-64.71c-50.6,0-91.62,50.22-91.62,112.17s41,112.18,91.62,112.18Z"
                          fill="#a74602"
                        />
                        <ellipse
                          cx="2278.9"
                          cy="1608.1"
                          rx="91.62"
                          ry="112.18"
                          fill="#fff"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <ellipse
                          cx="2278.9"
                          cy="1608.1"
                          rx="58.98"
                          ry="71.8"
                          fill="#98c8db"
                        />
                        <path
                          d="M1482.59,1580.48v45.06H1246.7v-45.06c0-66.59,52.81-120.55,117.94-120.55S1482.59,1513.89,1482.59,1580.48Z"
                          fill="#59221d"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M1376.16,1720.28c-50.6,0-91.62-50.22-91.62-112.18s41-112.17,91.62-112.17h-64.71c-50.6,0-91.62,50.22-91.62,112.17s41,112.18,91.62,112.18Z"
                          fill="#a74602"
                        />
                        <ellipse
                          cx="1376.16"
                          cy="1608.1"
                          rx="91.62"
                          ry="112.18"
                          fill="#fff"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <ellipse
                          cx="1376.16"
                          cy="1608.1"
                          rx="58.98"
                          ry="71.8"
                          fill="#98c8db"
                        />
                        <path
                          d="M1507.66,1585.85v39.69h-25.07v-45.06c0-66.59-52.81-120.55-117.95-120.55s-117.94,54-117.94,120.55v45.06h-60.21v-39.69c0-90.65,71.9-164.13,160.58-164.13S1507.66,1495.2,1507.66,1585.85Z"
                          fill="#ffc200"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M794.12,1580.48v45.06H558.23v-45.06c0-66.59,52.81-120.55,117.94-120.55S794.12,1513.89,794.12,1580.48Z"
                          fill="#59221d"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M687.69,1720.28c-50.6,0-91.62-50.22-91.62-112.18s41-112.17,91.62-112.17H623c-50.6,0-91.62,50.22-91.62,112.17s41,112.18,91.62,112.18Z"
                          fill="#a74602"
                        />
                        <ellipse
                          cx="687.69"
                          cy="1608.1"
                          rx="91.62"
                          ry="112.18"
                          fill="#fff"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <ellipse
                          cx="687.69"
                          cy="1607.57"
                          rx="58.98"
                          ry="71.8"
                          fill="#98c8db"
                        />
                        <path
                          d="M819.18,1585.85v39.69H794.12v-45.06c0-66.59-52.81-120.55-118-120.55s-117.94,54-117.94,120.55v45.06H498v-39.69c0-90.65,71.9-164.13,160.58-164.13S819.18,1495.2,819.18,1585.85Z"
                          fill="#ffc200"
                          stroke="#59221d"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <rect
                          y="1612.59"
                          width="560.93"
                          height="44.61"
                          fill="#59221d"
                        />
                        <path
                          d="M644.94,1220.75H903.63a25.49,25.49,0,0,0,25.49-25.49V1030.32H775.8a68.4,68.4,0,0,0-62.23,40Z"
                          fill="#59221d"
                        />
                        <path
                          d="M927.07,1017l-157.75,0a77.47,77.47,0,0,0-70.48,45.31l-66.2,145.12"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="5"
                        />
                        <path
                          d="M929.12,1272.65v210.43h-96.3c-24.52-68.28-103.39-106.89-198-106.89V1250.08"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="5"
                        />
                        <path
                          d="M597,1221.05H328.26l158.33-190.73H652a26.85,26.85,0,0,1,24.44,38L611.08,1212A15.5,15.5,0,0,1,597,1221.05Z"
                          fill="#fff"
                        />
                        <path
                          d="M525.44,1221.05H327l158.54-190.73H618.11a26.85,26.85,0,0,1,24.44,38l-49.72,109.37A74,74,0,0,1,525.44,1221.05Z"
                          fill="#98c8db"
                        />
                        <path
                          d="M329,1221.05H590.26a22.74,22.74,0,0,0,20.7-13.33l63.39-139.43a26.85,26.85,0,0,0-24.44-38H488.59"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <polyline
                          points="452.91 1220.75 502.91 1202.03 584.28 1202.03"
                          fill="none"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                        <path
                          d="M83,1578.87V1414.74a17.61,17.61,0,0,1,17.42-17.8h134.9a17.61,17.61,0,0,1,17.42,17.8v164.13a17.61,17.61,0,0,1-17.42,17.8H100.38A17.61,17.61,0,0,1,83,1578.87Z"
                          fill="#59221d"
                        />
                        <circle
                          cx="231.83"
                          cy="1414.8"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="103.78"
                          cy="1414.8"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="135.79"
                          cy="1414.8"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="167.81"
                          cy="1414.8"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="199.82"
                          cy="1414.8"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="215.83"
                          cy="1431.32"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="119.79"
                          cy="1431.32"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="151.8"
                          cy="1431.32"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="183.81"
                          cy="1431.32"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="231.83"
                          cy="1447.84"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="103.78"
                          cy="1447.84"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="135.79"
                          cy="1447.84"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="167.81"
                          cy="1447.84"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="199.82"
                          cy="1447.84"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="215.83"
                          cy="1464.37"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="119.79"
                          cy="1464.37"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="151.8"
                          cy="1464.37"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="183.81"
                          cy="1464.37"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="231.83"
                          cy="1480.89"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="103.78"
                          cy="1480.89"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="135.79"
                          cy="1480.89"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="167.81"
                          cy="1480.89"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="199.82"
                          cy="1480.89"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="215.83"
                          cy="1497.42"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="119.79"
                          cy="1497.42"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="151.8"
                          cy="1497.42"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="183.81"
                          cy="1497.42"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="231.83"
                          cy="1513.94"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="103.78"
                          cy="1513.94"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="135.79"
                          cy="1513.94"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="167.81"
                          cy="1513.94"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="199.82"
                          cy="1513.94"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="215.83"
                          cy="1530.46"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="119.79"
                          cy="1530.46"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="151.8"
                          cy="1530.46"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="183.81"
                          cy="1530.46"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="231.83"
                          cy="1546.99"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="103.78"
                          cy="1546.99"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="135.79"
                          cy="1546.99"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="167.81"
                          cy="1546.99"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="199.82"
                          cy="1546.99"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="215.83"
                          cy="1563.51"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="119.79"
                          cy="1563.51"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="151.8"
                          cy="1563.51"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="183.81"
                          cy="1563.51"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="231.83"
                          cy="1580.03"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="103.78"
                          cy="1580.03"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="135.79"
                          cy="1580.03"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="167.81"
                          cy="1580.03"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <circle
                          cx="199.82"
                          cy="1580.03"
                          r="5.08"
                          fill="#ffc200"
                        />
                        <rect
                          x="819.18"
                          y="1591.54"
                          width="122.91"
                          height="21.05"
                          fill="#59221d"
                          stroke="#59221d"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="5"
                        />
                      </g>
                    </g>
                    <g id="DRIVER">
                      <g id="BODY">
                        <path
                          d="M782.24,1102.8H882.6a46.51,46.51,0,0,1,46.51,46.51v46A25.71,25.71,0,0,1,903.4,1221H745.17a0,0,0,0,1,0,0v-81.13A37.07,37.07,0,0,1,782.24,1102.8Z"
                          fill="#98c8db"
                        />
                        <path
                          d="M850.45,1102.8a14.5,14.5,0,0,1-2.59,7,17.29,17.29,0,0,1-14.25,7.11h-9.9L809.27,1221h-5l14.46-104.38c-8.06-1.27-14.54-6.74-16.6-13.82h5.14c2.24,5.31,8.23,9.1,15.06,9.1h11.32a12.27,12.27,0,0,0,10.15-5,9.43,9.43,0,0,0,1.66-4.12Z"
                          fill="#59221d"
                        />
                      </g>
                      <g id="HAND">
                        <path
                          d="M892.55,1102.75a36.83,36.83,0,0,1,36.57,36.82V1193c0,35.38-12,67.52-62.68,64.06l-103.31-19.32c7.08-.18,12.79-13.29,12.79-29.45s-5.8-29.45-12.94-29.45l98.51.53v-46.54a30,30,0,0,1,30.25-30Z"
                          fill="#fff"
                        />
                        <ellipse
                          cx="762.98"
                          cy="1208.25"
                          rx="12.94"
                          ry="29.46"
                          fill="#59221d"
                        />
                        <path
                          d="M770.73,1200.11c0,11.78-3.68,21.32-8.22,21.32h-87.7a7,7,0,0,1-7-7,7.07,7.07,0,0,1,1-3.67,7.16,7.16,0,0,1,2.8-2.57L709.85,1189a95.21,95.21,0,0,1,42.89-10.2h9.77C767.05,1178.79,770.73,1188.34,770.73,1200.11Z"
                          fill="#fff"
                        />
                        <path
                          d="M714.86,1199.48l-28.52,11.69a8.43,8.43,0,0,0-5.24,7.81"
                          fill="none"
                          stroke="#a74602"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="4"
                        />
                        <path
                          d="M733.76,1202l-22.31,9.14a8.43,8.43,0,0,0-5.24,7.81"
                          fill="none"
                          stroke="#a74602"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="4"
                        />
                      </g>
                      <g id="NECK">
                        <path
                          d="M844.65,1105.38l0,0a10.4,10.4,0,0,1-.87,1.5,12.27,12.27,0,0,1-10.15,5H822.29a18,18,0,0,1-6.41-1.17,15.26,15.26,0,0,1-8.17-7,16.67,16.67,0,0,1-1-5.81v-2.32l32.17-16.19,5.77,18.11A12.93,12.93,0,0,1,844.65,1105.38Z"
                          fill="#fff"
                        />
                        <path
                          d="M839.26,1082.19a9.07,9.07,0,0,1-1.43,4.88l-22,23.66a15,15,0,0,1-8.64-7.93,20,20,0,0,1-.57-4.83v-2.32l32.17-16.19A9.09,9.09,0,0,1,839.26,1082.19Z"
                          fill="#98c8db"
                        />
                      </g>
                      <g id="HEAD">
                        <g id="EAR">
                          <path
                            d="M838.84,1063.29H846a7.13,7.13,0,0,1,7.13,7.13v2.95a7.13,7.13,0,0,1-7.13,7.13h-7.13a0,0,0,0,1,0,0v-17.21A0,0,0,0,1,838.84,1063.29Z"
                            fill="#fff"
                          />
                          <path
                            d="M842.24,1073.09a5.27,5.27,0,0,1,5.27-5.27"
                            fill="none"
                            stroke="#a74602"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          />
                        </g>
                        <path
                          id="HEAD-2"
                          data-name="HEAD"
                          d="M838.84,1062.06v18.46L831,1090a15.32,15.32,0,0,1-11.83,5.62H806.67a8.42,8.42,0,0,1-8-10.73l7.73-27.64Z"
                          fill="#fff"
                        />
                        <path
                          id="BEARD"
                          d="M847.2,1063.29H843a4.18,4.18,0,0,0-4.18,4.19v13.06L831,1090a15.33,15.33,0,0,1-11.84,5.62H806.66a8.42,8.42,0,0,1-8-10.72l2.27-8.13h30.49a3.63,3.63,0,0,0,3.62-3.66l0-2.5a9.48,9.48,0,0,0-2.29-6.1c-1.42-1.66-3.42-3.79-5.7-4.16Z"
                          fill="#a74602"
                        />
                        <g id="FACE">
                          <path
                            d="M805.37,1061l5.85,1.13s-3.89,15.44-.09,15.78"
                            fill="none"
                            stroke="#a74602"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          />
                          <ellipse
                            cx="819.65"
                            cy="1068.68"
                            rx="1.29"
                            ry="2.26"
                            fill="#a74602"
                          />
                          <ellipse
                            cx="806.05"
                            cy="1068.68"
                            rx="1.29"
                            ry="2.26"
                            fill="#a74602"
                          />
                          <path
                            d="M818.52,1062.6s5,.82,7.69,1.38"
                            fill="none"
                            stroke="#a74602"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          />
                        </g>
                        <path
                          id="CAP"
                          d="M793.08,1055.31a2,2,0,0,1-1.83-2.3,2.21,2.21,0,0,1,2.57-1.64l14.43,2.15c2.57-4.31,8.08-10.77,17.7-9.92,21.26,1.88,21.26,19.69,21.26,19.69Z"
                          fill="#ffc200"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="_2_MAN" data-name="2 MAN">
                    <rect
                      id="BOX"
                      x="2637.07"
                      y="1214.25"
                      width="299.72"
                      height="281.51"
                      fill="#ffc200"
                    />
                    <g id="SHOES">
                      <path
                        d="M2808.07,1932.45l146.32,2.14-2.27,9.75a35.93,35.93,0,0,1-35,27.77H2773.79Z"
                        fill="#59221d"
                      />
                      <path
                        d="M2946.45,1972.11l.59,10.12a3,3,0,0,1-3,3h-9.83a3,3,0,0,1-2.14-.86,2.88,2.88,0,0,1-.9-2.09,3,3,0,0,0-3-3l-9.71,0a3.08,3.08,0,0,0-2.14.86,2.87,2.87,0,0,0-.89,2.09,3,3,0,0,1-3,3h-9.82a3.07,3.07,0,0,1-2.15-.86,2.84,2.84,0,0,1-.89-2.09,3,3,0,0,0-3-3l-9.71,0a3.07,3.07,0,0,0-2.13.87,2.88,2.88,0,0,0-.9,2.09,3,3,0,0,1-3,3l-9.83,0a3.06,3.06,0,0,1-2.14-.87,2.87,2.87,0,0,1-.9-2.08,3,3,0,0,0-3-2.95h-9.7a3.08,3.08,0,0,0-2.14.86,3,3,0,0,0-.89,2.1,3,3,0,0,1-3,2.95l-9.82,0a3.07,3.07,0,0,1-2.14-.87,2.89,2.89,0,0,1-.9-2.08,3,3,0,0,0-3-2.94h-9.71a3.05,3.05,0,0,0-2.13.87,2.86,2.86,0,0,0-.9,2.08,3,3,0,0,1-3,3h-9.83a3.09,3.09,0,0,1-2.15-.86,2.93,2.93,0,0,1-.89-2.09,3,3,0,0,0-3-3l-9.7,0a3.07,3.07,0,0,0-2.14.86,2.87,2.87,0,0,0-.89,2.09,3,3,0,0,1-3,3h-9.82a3,3,0,0,1-3-3l0-10.4h135.53l1.48-5.63a46.14,46.14,0,0,1,44.53-31.9l-8,37.53Z"
                        fill="#ffc200"
                      />
                      <path
                        d="M3262.85,1926.46l12.86-136.34,9.54,3a35.94,35.94,0,0,1,24.92,37.08l-11.38,142.88Z"
                        fill="#59221d"
                      />
                      <path
                        d="M3325.34,1804.49l-.76,9.79a3.08,3.08,0,0,1-1,2.07,2.86,2.86,0,0,1-2.15.73,3,3,0,0,0-3.18,2.78l-.75,9.68a3.13,3.13,0,0,0,.69,2.2,2.87,2.87,0,0,0,2,1,3,3,0,0,1,2.71,3.26l-.76,9.79a3.08,3.08,0,0,1-1,2.07,2.86,2.86,0,0,1-2.15.73,3,3,0,0,0-3.18,2.78l-.76,9.68a3.09,3.09,0,0,0,.7,2.2,2.87,2.87,0,0,0,2,1,3,3,0,0,1,2.7,3.26l-.75,9.79a3.08,3.08,0,0,1-1,2.07,2.93,2.93,0,0,1-2.15.73,3,3,0,0,0-3.18,2.78l-.76,9.68a3.1,3.1,0,0,0,.69,2.2,2.91,2.91,0,0,0,2,1.05,3,3,0,0,1,2.7,3.26l-.76,9.79a3.06,3.06,0,0,1-1,2.06,3,3,0,0,1-2.16.74,3,3,0,0,0-3.16,2.78l-.76,9.68a3.14,3.14,0,0,0,.69,2.2,2.89,2.89,0,0,0,2,1,3,3,0,0,1,2.71,3.26l-.76,9.79a3.08,3.08,0,0,1-1,2.07,2.93,2.93,0,0,1-2.15.73,3,3,0,0,0-3.18,2.78l-.75,9.68a3.14,3.14,0,0,0,.69,2.2,2.89,2.89,0,0,0,2,1,3,3,0,0,1,2.71,3.26l-.76,9.79a3,3,0,0,1-3.18,2.8l-10.37-.82,10.75-135.1L3304,1837a46.13,46.13,0,0,1-28.25-46.92l36.76,11V1801l10.14.22A3,3,0,0,1,3325.34,1804.49Z"
                        fill="#ffc200"
                      />
                    </g>
                    <g id="OVERALL">
                      <path
                        d="M3141.26,1199.67v190.41H2977.07c-27.54,0-54.12-16.85-53-49l-101.88,138.46v0h0c-6,7.87-31.11-1-56.23-19.84s-40.71-40.56-34.78-48.46l-.09.09,174.19-236.29a56.83,56.83,0,0,1,46.67-23.13h141.61A47.72,47.72,0,0,1,3141.26,1199.67Z"
                        fill="#fff"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M2808.06,1932.44l146.33,2.15,61.36-257.65c0,100.06,51.46,191.35,161.64,228.16l85.46,21.35,16-135.45a180.91,180.91,0,0,1-133.56-174.61V1368.86l-73.68-120.55,43.34-76a53.12,53.12,0,0,1,11.57-12.16,47.75,47.75,0,0,0-18-9.24,28.56,28.56,0,0,0-14.37,11.14l-36.52,63.39L3018.8,1162a28.42,28.42,0,0,0-23.68-12.72h-40.75a52.92,52.92,0,0,1,43.62,23l47.39,74.25-71.91,124.81c-5.23,9.08-17.28,11.92-25.75,5.74-9.74-7.08-17.51-22.28-20.82-35.51a1.78,1.78,0,0,0-3.48.1ZM3106.49,1387h-87a15.67,15.67,0,0,1-13.61-23.43l53.9-94.56,60,93.9A15.66,15.66,0,0,1,3106.49,1387Z"
                        fill="#98c8db"
                      />
                      <line
                        x1="2919.87"
                        y1="1346.7"
                        x2="2975.31"
                        y2="1264.59"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <polyline
                        points="3013.44 1676.94 3047.59 1487.79 3074.2 1487.79"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                    </g>
                    <g id="HAND-2" data-name="HAND">
                      <path
                        d="M2800.63,1479.46c-10.8,11.17-20.76,21.89-23.17,23.62-16.15,11.61-42.88,28.77-92.81,28.76-12.77,0-36.9-23.49-48.53-36.49-2.82-3.14-.54-9.45,3.68-9.37,18,.32,44-1.77,49.84-10.46,10.6-15.63-24.67-5.72-23.65-20.86,0,0,50-14.33,68.64-26.63,5.93,9.47,17.09,21,31.31,31.72C2778.25,1469,2790.57,1475.82,2800.63,1479.46Z"
                        fill="#a74602"
                      />
                      <path
                        d="M2800.63,1479.46c-5.85,6-11.44,12-15.74,16.38l-.55-.21c-36.52-13.17-52.51-55.56-55.43-64.25h0a64.37,64.37,0,0,0,5.72-3.34c5.93,9.47,17.09,21,31.31,31.72C2778.25,1469,2790.57,1475.82,2800.63,1479.46Z"
                        fill="#59221d"
                      />
                      <path
                        d="M2711.9,1516.91c-13.06,3.78-22.18,6.31-41.39,6.31"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      />
                      <path
                        d="M2701.77,1506.27a142.74,142.74,0,0,1-44.05,6.31"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      />
                      <path
                        d="M2695.62,1495.63c-13.06,3.78-28.83,6.31-48,6.31"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      />
                    </g>
                    <g id="NECK-2" data-name="NECK">
                      <polygon
                        points="3005.15 1149.29 3005.15 1121.53 3046.5 1095.52 3077.64 1149.29 3005.15 1149.29"
                        fill="#a74602"
                      />
                      <path
                        d="M3005.15,1149.29v-27.76l41.35-26h0a16.08,16.08,0,0,1-3.56,20.36Z"
                        fill="#59221d"
                      />
                    </g>
                    <g id="HEAD-3" data-name="HEAD">
                      <path
                        d="M3048.68,1095.86a12.91,12.91,0,0,1-12.9,12.89h-4.32a16.25,16.25,0,0,1-16.14,14.32h-10.17a17.25,17.25,0,0,1-17.25-17.25v-2.92h-3.62a2.45,2.45,0,0,1-2.29-3.34l5.91-15.18c0-13.32,12.13-24.12,25.45-24.12l3.34,0a22.42,22.42,0,0,1,21,14.86l3.18,8.87A12.91,12.91,0,0,1,3048.68,1095.86Z"
                        fill="#a74602"
                      />
                      <path
                        d="M3030.86,1097.58a6.64,6.64,0,0,1,6.64-6.65"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="3"
                      />
                      <path
                        d="M2992.81,1079.76s7.94,0,12.34,2"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="3"
                      />
                      <ellipse
                        cx="2996.99"
                        cy="1091.22"
                        rx="2.42"
                        ry="3.31"
                        fill="#59221d"
                      />
                      <path
                        d="M3023.89,1090.68a7.71,7.71,0,0,1,7.71-7.71h7.15"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="3"
                      />
                    </g>
                  </g>
                  <g id="_1_MAN" data-name="1 MAN">
                    <g id="RIGHT_HAND" data-name="RIGHT HAND">
                      <path
                        d="M2402.09,1521c11.65-6.39,44.86,27,40.25,32.72-6.68,8.34-21.89-5.58-23.48,3.49-1.86,10.66,48.11,57.37,39.67,67.12s-59.8,18.5-81,3.65c-11.54-8.08-34.4-36.7-47.4-56C2330.1,1572,2374.27,1536.22,2402.09,1521Z"
                        fill="#fff"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M2413.23,1634.83c-4.76-3.33-22.16-20.74-28.76-26.87"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M2435.66,1633.15c-4.76-3.34-28.8-25.67-35.16-32.4"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M2451,1628.66c-4.76-3.34-26.55-28.4-32.92-35.14"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M2422.4,1511.42c-39.58,61.38-110.74,68.59-110.74,68.59l-171.73-312.15a63.36,63.36,0,0,1,25.2-86l6.52-3.57a63.37,63.37,0,0,1,86,25.21Z"
                        fill="#a74602"
                      />
                    </g>
                    <g id="OVERALL-2" data-name="OVERALL">
                      <path
                        d="M2251.25,1247.37l-106.91,211.55,93,163.59v333.36a537.35,537.35,0,0,0-72.08-4.66c-36.33,0-70.06,3.32-98,9v-300.9l-69.73-120.21-187.19,404.15h0a422.85,422.85,0,0,0-67.93-5.32c-42.45,0-81.43,5.88-112.06,15.71q-.53-6-.53-11.92a132.8,132.8,0,0,1,15.7-62.65l319.26-659.51c17.92-33,40.84-47.72,78.37-47.72H2204.8C2243.58,1171.86,2268.74,1212.75,2251.25,1247.37Z"
                        fill="#ffc200"
                      />
                      <line
                        x1="1997.6"
                        y1="1539.12"
                        x2="2023.25"
                        y2="1485.19"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="5"
                      />
                      <polyline
                        points="1893.79 1365.43 2152 1440.92 2142.48 1461.03 1884.26 1384.49"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="5"
                      />
                      <path
                        d="M1932.37,1399.9a56.19,56.19,0,0,1-69.82,37.91"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="5"
                      />
                    </g>
                    <g id="NECK-3" data-name="NECK">
                      <path
                        d="M2083.89,1171.85l52.88-36.59,29.57,35.62v32.18a16.73,16.73,0,0,1-27.18,13Z"
                        fill="#fff"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <polygon
                        points="2104.85 1185.61 2088.36 1171.93 2135.91 1138.14 2155.62 1161.87 2104.85 1185.61"
                        fill="#98c8db"
                      />
                    </g>
                    <g id="HEAD-4" data-name="HEAD">
                      <path
                        d="M2178.22,1185.6l-11-.22a23,23,0,0,1-22.49-23.83l.28-7.43h-10a11.57,11.57,0,0,1-11.58-11.58v-6.22a11.57,11.57,0,0,1,11.58-11.58h6.22a11.41,11.41,0,0,1,5.67,1.48,25.6,25.6,0,0,1,24.64-18.17c18.39,0,23.37,9.51,25.07,22.08l4.11,30.3A22.2,22.2,0,0,1,2178.22,1185.6Z"
                        fill="#fff"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M2150.06,1133.52l2.22,4h0a3.69,3.69,0,0,0,3.72-3.67v-9.37a15.12,15.12,0,0,1,15.22-15h0a27.93,27.93,0,0,1,25.78,17l.1.23v-2.78a21.27,21.27,0,0,0-21.41-21.12h-21.37a21.27,21.27,0,0,0-21.4,20.78l-.05,3.15,5.31,0A13.52,13.52,0,0,1,2150.06,1133.52Z"
                        fill="#59221d"
                      />
                      <path
                        d="M2142.34,1140.84a5.58,5.58,0,0,0-5.57-5.58"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                      <path
                        d="M2171.87,1160.87c1.34,3.38,5.55,4.88,9.41,3.35"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                      <path
                        d="M2196,1128.37h-8.76a6.07,6.07,0,0,0-6.08,5.8c-.22,5.41-.73,13.51,3.25,19.3"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                      <ellipse
                        cx="2188.91"
                        cy="1139.38"
                        rx="2.25"
                        ry="3.89"
                        fill="#59221d"
                      />
                      <ellipse
                        cx="2168.89"
                        cy="1139.38"
                        rx="2.25"
                        ry="3.89"
                        fill="#59221d"
                      />
                      <line
                        x1="2162.53"
                        y1="1128.37"
                        x2="2171.87"
                        y2="1128.37"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                    </g>
                    <g id="SHOES-2" data-name="SHOES">
                      <path
                        d="M1823.3,1989.75H1638.87a132.81,132.81,0,0,1-8.45-36.09c30.63-9.83,69.61-15.71,112.06-15.71a422.85,422.85,0,0,1,67.93,5.32Z"
                        fill="#59221d"
                      />
                      <path
                        d="M2258.2,1989.75H2067.33v-29.53c27.89-5.69,61.62-9,98-9a537.35,537.35,0,0,1,72.08,4.66v.22Z"
                        fill="#59221d"
                      />
                    </g>
                    <g id="BOXES-2" data-name="BOXES">
                      <rect
                        x="2225.19"
                        y="1537.61"
                        width="372.59"
                        height="270.14"
                        fill="#fff"
                        stroke="#ffc200"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <rect
                        x="2227.75"
                        y="1567.78"
                        width="266.15"
                        height="5.29"
                        fill="#98c8db"
                      />
                      <rect
                        x="2227.75"
                        y="1770.57"
                        width="266.15"
                        height="5.29"
                        fill="#98c8db"
                      />
                      <polygon
                        points="2348.7 1619.37 2227.74 1764.27 2227.74 1619.37 2348.7 1619.37"
                        fill="#98c8db"
                      />
                      <rect
                        x="2493.9"
                        y="1540.38"
                        width="101.62"
                        height="264.59"
                        fill="#98c8db"
                      />
                      <path
                        d="M2493.9,1770.57v5.3h101.24v-5.3Zm0-202.79v5.29h101.24v-5.29Z"
                        fill="#fff"
                      />
                      <rect
                        x="2172.99"
                        y="1807.81"
                        width="165.96"
                        height="179.66"
                        fill="#fff"
                        stroke="#ffc200"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <circle
                        cx="2291.2"
                        cy="1829.02"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2258.17"
                        cy="1829.02"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2324.22"
                        cy="1829.02"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2225.15"
                        cy="1829.02"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2274.69"
                        cy="1846.24"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2241.66"
                        cy="1846.24"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2307.71"
                        cy="1846.24"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2291.2"
                        cy="1863.45"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2258.17"
                        cy="1863.45"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2324.22"
                        cy="1863.45"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2225.15"
                        cy="1863.45"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2274.69"
                        cy="1880.67"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2241.66"
                        cy="1880.67"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2307.71"
                        cy="1880.67"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2291.2"
                        cy="1897.88"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2258.17"
                        cy="1897.88"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2324.22"
                        cy="1897.88"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2225.15"
                        cy="1897.88"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2274.69"
                        cy="1915.09"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2241.66"
                        cy="1915.09"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2307.71"
                        cy="1915.09"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2291.2"
                        cy="1932.31"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2258.17"
                        cy="1932.31"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2324.22"
                        cy="1932.31"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2225.15"
                        cy="1932.31"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2274.69"
                        cy="1949.52"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2241.66"
                        cy="1949.52"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2307.71"
                        cy="1949.52"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2291.2"
                        cy="1966.73"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2258.17"
                        cy="1966.73"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2324.22"
                        cy="1966.73"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2225.15"
                        cy="1966.73"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2191.69"
                        cy="1829.02"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2208.2"
                        cy="1846.24"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2191.69"
                        cy="1863.45"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2208.2"
                        cy="1880.67"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2191.69"
                        cy="1897.88"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2208.2"
                        cy="1915.09"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2191.69"
                        cy="1932.31"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2208.2"
                        cy="1949.52"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <circle
                        cx="2191.69"
                        cy="1966.73"
                        r="5.24"
                        fill="#ffc200"
                      />
                      <rect
                        x="2338.95"
                        y="1807.81"
                        width="360.93"
                        height="179.66"
                        fill="#fff"
                        stroke="#ffc200"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                    </g>
                    <g id="LEFT_HAND" data-name="LEFT HAND">
                      <path
                        d="M2343.52,1622.27c-15.65,13.33-46,37.13-60.91,35.11-58.29-7.91-86.79-32.2-103.79-48.3-2.57-2.43-5.51-5.87-14.4-17.62h0l-2.33-3.1c12.83-2.76,31.35-10.34,50.37-21.32,18.09-10.45,33.11-21.73,42-31a106.29,106.29,0,0,0,14.72,10.57c20.49,12.62,47.51,23.56,47.51,23.56-1.22,17.84-41,2.23-31.15,22.16,5.5,11.08,34,17.43,55,19.9A5.7,5.7,0,0,1,2343.52,1622.27Z"
                        fill="#fff"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M2253.16,1635.63c14.65,6.48,29.56,11.52,52,14.56"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M2266.68,1624.81a193.08,193.08,0,0,0,54,15"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M2280.2,1614c14.65,6.49,32.66,12,55.08,15"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <path
                        d="M2269.14,1546.66c-9.37,8.7-26.77,19.39-47.74,28.67-22.62,10-44.13,15.78-57,16.13h0l-2.33-3.1c12.83-2.76,31.35-10.34,50.37-21.32,18.09-10.45,33.11-21.73,42-31A106.29,106.29,0,0,0,2269.14,1546.66Z"
                        fill="#59221d"
                      />
                      <path
                        d="M1972.14,1268.26a63.81,63.81,0,0,1,25.39-86.61l5.71-3.12a63.81,63.81,0,0,1,86.61,25.38l172.72,315.82c4.4,7.61-18.05,28.78-50.12,47.31s-62.7,27.36-67.08,19.75Z"
                        fill="#a74602"
                      />
                    </g>
                  </g>
                  <g id="PLANTS">
                    <path
                      d="M4111.54,1175l-500.25-.18s-8.68-62.78,49.95-60.69c51.09,1.82,42-2.4,63.3-35.33s49.41-47.72,105.65-39.26c57.2,8.59,53.21-64.66,123.75-65.41C4037.13,973.23,4111.54,1175,4111.54,1175Z"
                      fill="#f5bbbb"
                    />
                    <g id="TREE">
                      <polygon
                        points="3891.1 1174.99 3998.55 797.51 4111.54 1174.99 3891.1 1174.99"
                        fill="#ffc200"
                      />
                      <polygon
                        points="4064.07 1016.39 4001.05 1106.29 4001.05 1174.99 3996.05 1174.99 3996.05 1000.05 3951.15 964.04 3952.63 958.82 3996.05 993.64 3996.05 806.29 3998.55 797.51 4001.05 805.86 4001.05 880.13 4018.04 862.61 4019.68 868.1 4001.05 887.32 4001.05 1097.56 4062.24 1010.29 4064.07 1016.39"
                        fill="#59221d"
                      />
                    </g>
                    <g id="BUSH">
                      <path
                        d="M3396,1986.75a143.55,143.55,0,0,1,206.18-84.27,161.45,161.45,0,0,1,314.34-73.2,94,94,0,0,1,18.68-1.86c48,0,86.94,35.67,86.94,79.67s-38.92,79.66-86.94,79.66Z"
                        fill="#ffc200"
                      />
                      <line
                        x1="3751.5"
                        y1="1985.99"
                        x2="3751.5"
                        y2="1813.28"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <line
                        x1="3788.52"
                        y1="1856.96"
                        x2="3751.5"
                        y2="1915.5"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                      <line
                        x1="3700.86"
                        y1="1926.39"
                        x2="3751.5"
                        y2="1964.51"
                        fill="none"
                        stroke="#59221d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                      />
                    </g>
                  </g>
                  <path
                    id="CLOUD"
                    d="M447.87,335.87v-2c12.85-35.15,47.4-60.32,88-60.32a95.58,95.58,0,0,1,35.7,6.86,7.36,7.36,0,0,0,10.14-6.74v-.12a88.07,88.07,0,0,1,5.86-31.68c13.23-34.46,47.42-59,87.52-59s74.27,24.54,87.5,59c.31.78.6,1.57.88,2.37,1.13-.81,2.27-1.61,3.44-2.37a95.73,95.73,0,0,1,104.57,0c24.79,16.31,41.09,43.87,41.09,75.14v.13a5.21,5.21,0,0,0,8.49,3.93c18.65-15.09,43.65-24.32,71.13-24.32,35.61,0,67,15.49,85.88,39.13Z"
                    fill="#c1dee9"
                  />
                </g>
              </g>
            </svg>
          </span>
          {/* <svg
            className={style.art}
            width="999"
            height="105"
            viewBox="0 0 999 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M989 156.4V147L993.9 135.6H992L990.7 134.4L992 132.1L988.4 132.5C987.3 131.7 986.1 130.9 984.8 130.2L986.1 127.7L981.9 128.7C979.9 127.7 977.9 126.7 975.9 126L976.5 123.4L972.9 124.9C969.2 123.6 965.4 122.6 961.7 121.9V118.9L958.4 121.2C953.1 120.2 948.1 119.5 943.9 119.2V117H942.7L941.5 119C937 118.6 933.8 118.5 932.5 118.5H932L923 118.9L921.8 116.9H920.6V119.1C916.4 119.5 911.4 120.1 906.1 121.1L903 119V122C899.2 122.7 895.4 123.8 891.7 125L888.1 123.5L888.8 126.1C886.722 126.859 884.686 127.727 882.7 128.7L878.5 127.7L879.8 130.3L876.2 132.6L872.6 132.2L873.9 134.5L872.6 135.7H870.8L875.8 147.1L872.9 167.9L871.5 147.5L867.3 137.6H861.8V105.6H865.8V92.6H861.8V79.3V79C861.8 77 858.6 76.9 858 75.6V74.4C858.3 74.4 858.6 74.4 858.8 74.2C859.5 73.9 859.8 73.3 859.4 72.8C859.6 73.2 859.4 73.6 858.9 73.8C858.4 74.1 857.6 74 857.2 73.6C856.9 73.2 857 72.7 857.6 72.4C858.1 72.2 858.7 72.3 859.1 72.5C858.6 72.2 857.7 72.1 857 72.4C856.3 72.7 856 73.4 856.6 73.9C856.8 74.2 857.1 74.3 857.5 74.4V75.6C856.8 76.8 853.9 77.1 853.9 79V92.8H849.4V105.6H853.9V137.6H838.9V110.8H843V98H839V84.6V84.3C839 82.3 835.7 82.1 835.2 80.9V79.7C835.4 79.7 835.7 79.7 835.9 79.5C836.6 79.2 836.9 78.5 836.5 78.1C836.7 78.4 836.5 78.9 836.1 79.1C835.5 79.4 834.8 79.3 834.4 78.9C834 78.5 834.2 78 834.7 77.7C835.2 77.5 835.9 77.5 836.3 77.8C835.7 77.4 834.9 77.3 834.2 77.7C833.5 78 833.2 78.7 833.7 79.2C834 79.5 834.3 79.6 834.7 79.6V81C834 82.2 831 82.5 831 84.4V98H826.6V111H831V134.7H817.4C816.5 122 802.4 118.1 802.4 118.1C802.4 118.1 801.2 117.7 800.9 117C801.8 116.7 802.3 116.2 802.3 115.5C802.3 114.9 801.8 114.3 800.9 114.1V109.6C801.3 109.4 801.5 109.1 801.5 108.8C801.5 108.5 801.3 108.2 800.9 108V106.7C802.4 106.4 803.5 105.5 803.5 104.4C803.5 103.1 802.1 102.1 800.3 102C801.7 102.1 802.8 103 802.8 104C802.8 105 801.5 105.8 800 105.8C798.4 105.8 797.2 104.9 797.2 103.9C797.2 102.9 798.2 102.1 799.7 102C797.9 102.1 796.5 103.1 796.5 104.4C796.5 105.5 797.6 106.4 799.1 106.7V107.9C798.7 108.1 798.5 108.4 798.5 108.9C798.5 109.2 798.8 109.5 799.1 109.7V114.1C798.3 114.3 797.7 114.9 797.7 115.5C797.7 116.2 798.3 116.7 799.1 117C798.7 117.7 797.6 118 797.6 118C797.6 118 783.4 122 782.6 134.7H769.6V111H773.7V98H769.7V84.6V84.4C769.7 82.4 766.4 82.2 765.9 80.9V79.7L766.7 79.6C767.3 79.3 767.6 78.6 767.2 78.2C767.4 78.5 767.3 78.9 766.8 79.2C766.2 79.4 765.5 79.3 765.1 78.9C764.7 78.5 764.9 78.1 765.4 77.8C765.9 77.5 766.6 77.6 767 77.8C766.4 77.5 765.6 77.4 764.9 77.8C764.2 78.1 763.9 78.8 764.4 79.3L765.4 79.7V80.9C764.7 82.1 761.7 82.4 761.7 84.4V98H757.3V110.8H761.7V137.7H745.7V105.6H749.7V92.9H745.7V79.5V79.2C745.7 77.2 742.5 77 741.9 75.8V74.6C742.2 74.6 742.5 74.6 742.7 74.4C743.3 74.1 743.7 73.4 743.3 73C743.5 73.3 743.3 73.7 742.8 74C742.3 74.2 741.5 74.1 741.1 73.7C740.8 73.4 740.9 72.9 741.5 72.6C742 72.3 742.6 72.4 743 72.6C742.5 72.3 741.6 72.2 740.9 72.6C740.2 72.9 739.9 73.6 740.5 74.1C740.7 74.3 741 74.5 741.4 74.5V75.8C740.7 76.9 737.8 77.2 737.8 79.2V92.9H733.3V105.7H737.8V137.8H720.8L718.2 167.8L716.6 97.1H717.4V96.7L715.6 96.1L715.5 96V86H711.1V88.7L711 88.5L696.4 82.3V79.5L693.7 77.5H691.7V82.4L669 91.7V92.7L670.6 91.9V95.9L669 96.6V97.1L667 168L664.2 74.7V69.6H662.4V72.6H659.8V69.6H658.3V72.6H655V69.6H653.3V72.6H652.6V64.8H616.6V72.7H615.4V69.6H613.6V72.6H610.3V69.6H608.5V72.6H605.3V69.6H603.2V74.7L600.4 168.7L598 54.5V26.8H577V28.4H573.5V26.8H558.5V27.5H533.5V36.4H535.3L532 168.6L529.2 55.6H520.4V52.3H525.7V47.3H524.4V45.4C525.1 45.4 525.7 44.8 525.7 44C525.7 43.2 525.1 42.6 524.3 42.6C523.7 42.6 523.2 43 523 43.6H520.4V41.7H525.7V40.3H524.4V39.9H525C526.2 39.9 527 39.2 527 38.1C527 37.1 526.1 36.2 525 36.2C523.9 36.2 523 37 523 38.1V38.3H520.5V36.6H517.6V2.1H515.5V0H511.6V2H509.4V36.6H505.8V38.3H503.5C503.304 38.0699 503.058 37.8874 502.78 37.7661C502.503 37.6449 502.202 37.5881 501.9 37.6C500.9 37.6 500.1 38.2 500.1 39C500.1 39.5 500.5 40 501 40.2H500.8V41.7H505.8V43.6H503.1C502.9 42.5 501.9 41.6 500.8 41.6C499.5 41.6 498.4 42.6 498.4 43.9C498.4 45.2 499.5 46.2 500.8 46.2C501.5 46.2 502.1 45.9 502.5 45.4V47.2H500.8V52.2H505.8V55.5H469.8L466.8 167.7L464.5 90.2H449.5V86.6H440.5V80.9L435.3 76.2L432.6 59.8L431.4 58.6L431.1 52.3H430.3L429.9 58.7L428.5 60L425.7 76.2L421 81V86.7H411.5V90.3H398.3L396.1 167.8L393.9 118.6H394.5V115H394.7V114.6H394.5V112.1H392.5V113L391.5 111.8L390 113.6H384.3L383.1 111.8L381.8 113.6H371V112.9L371.5 112.3H371V111.9L371.5 111.2H371V108.2H367.8V105.8H368.4L367.2 103.8V103.3H367.5V103.1H367.2V102.7H366.8V103.1H366.6V103.3H366.8V103.8L365.4 105.8H366V108.2H362.5V104.7H363V104H361.8V96.2H362.5V95.6H361.8V92.7H362.5V92.3H362V90H362.5V87.4H362.7V87H362.5L361.4 84.8V84.4H361.6H361.4V84.2H361.1V84.3H360.9V84.4H361.1V84.7L359.9 87H359.7V87.4H359.9V87.8H358.9V87.2H357.3V87.8H356.5V87.2H355V87.8H354.3V87.2H352.7V87.8H351.7V87.2H350.4V87.8H349.6V87.2H348.2V87.8H347.4V87.2H345.7V87.8H344.7V87.4H344.9V87H344.7L343.4 84.7V84.4H343.7H343.4V84.2H343.2V84.3H343V84.4H343.2V84.8L342.1 87H341.9V87.4H342.1V90H342.6V92.2H342.1V92.7H342.8V95.6H342.1V96.2H342.8V103.9H341.6V104.6H342.1V108.2H338.7V105.7H339.2L337.8 103.7V103.3H338.1V103H337.8V102.7H337.4V103H337.2V103.3H337.4V103.8L336.2 105.8H336.8V108.2H333.7V111.2H333.2L333.7 111.8V112.2H333.2L333.7 112.8V113.5H322.9L321.5 111.8L320.3 113.5H314.7L313.2 111.8L312.2 112.9V112.1H310.2V114.6H310V115H310.2V118.4H310.8V119.5H311L310.8 121.2V123H318.5C319.6 122.9 332.9 119 335.7 117.8L304.9 166.8L328.3 122.7C328.3 122.7 321.3 125.9 318.6 125.9H307.4C306.8 125.5 306.4 125.2 305.8 125L306.3 122.5H304.6L303.6 123L303.5 123.8C298.363 121.583 292.997 119.939 287.5 118.9C279.5 117.3 270.1 116.4 260.2 116.4C245.544 116.22 230.976 118.693 217.2 123.7L217.1 123L216.1 122.5H214.4L214.8 124.9L212.8 125.9C208.1 126 204.2 126.1 202 126C199.3 126 192.3 122.8 192.3 122.8L211.1 155.8H188.1L93.8 105.8C94.2 102.4 95 99.1 96.2 95.5H92C92 95.5 90.7 96.1 90.7 96.5L90.2 100.3L87.3 102.3L85.2 101.1L84.6 96.4C84.6 96.1 83.3 95.4 83.3 95.4H79.1C80.4 99.2 81.1 102.7 81.6 106.2L10 155.7H0V161.4H66.6C64.8045 165.574 63.071 169.775 61.4 174H69.6L73.8 161.4H101.5L105.7 174H113.9L108.7 161.4H211.4L185 174H999V156.3H989V156.4ZM91.4 129C92.2 132.4 93.4 136.3 94.9 141.1L89.2 130.5L90.2 127.5L91.4 129ZM88.3 115L87.6 114.5L88.9 113.2L89.3 113.5V114.9H88.3V115ZM89 118L88.8 118.1L88.6 117.9H89V118ZM88.8 112.8L87.9 112.2H89.2V112.4L88.8 112.8V112.8ZM89.3 112.8V113.1L89.2 113V112.9L89.3 112.8ZM88.6 113L87.4 114.2L86.1 113.2L87.3 112.2L88.6 113ZM86.1 112.8V112.2H86.8L86.1 112.8ZM86 109.4V108.8L87 109.4H86ZM86.1 113.7L87.1 114.5L86.6 115H86.1V113.7ZM87.4 114.7L87.8 115H87L87.3 114.7H87.4ZM89.4 117.9C89.6 118.2 89.6 118.5 89.6 118.8L89.1 118.4L89.5 117.9H89.4ZM89.4 108.2V108.1L89.6 107.9L89.5 108.2H89.4ZM89.4 108.5V109.4H87.6L89 108.3L89.4 108.5V108.5ZM87.3 109.2L85.9 108.4L87.3 107.3L88.7 108.1L87.3 109.2ZM86.5 117.9L86.1 118.3L85.9 118.1V117.9H86.5V117.9ZM87 117.9H88L88.6 118.4L87.6 119.8L86.4 118.6L87 117.9V117.9ZM87.6 120.3L87.8 120.7H87.3L87.6 120.3ZM87.8 123.4H89.6L89 125L88 123.6L87.8 123.4ZM88.7 125.2L87.7 127.2L86.6 125.2L87.6 123.7L88.7 125.2ZM89.2 120.7H88.3L87.8 120L88.9 118.7L89.6 119.3L89.7 119.9L89.2 120.7V120.7ZM89.8 120.5V120.7H89.6L89.8 120.5ZM89.5 103.3L89.9 103V103.5L89.5 103.3ZM89.8 103.8H88.8L89.2 103.5L89.8 103.8ZM89.6 106.5V107.5L89 107.8L87.6 107L88.3 106.5H89.6ZM87.3 106.9L86.8 106.6H87.6L87.3 106.9ZM87 107.1L85.8 107.9L85.7 106.5H86.1L87 107.1V107.1ZM86 118.6H85.8H85.9H86ZM86.1 118.8L87.3 120L86.8 120.7H85.8L85.6 120.4L85.7 119.3L86.1 118.8V118.8ZM87.3 123.4L86.3 124.9L85.6 123.4H87.3ZM87.3 127.7L86.1 130L85.3 127.2L86.3 125.7L87.3 127.7V127.7ZM87.6 128.1L88.8 130.3L87.4 134.3L86.4 130.6L87.6 128.1ZM87.8 127.7L89 125.6L90 127L89 129.8L87.8 127.7V127.7ZM90.8 126.1L91.3 127.9L90.6 126.9L90.8 126.1ZM90.6 125.4L90.2 126.6L89.2 125.2L90.1 123.5H90.3L90.6 125.4ZM90.3 100.6L90.1 102.6L89.2 103.2L87.7 102.4L90.3 100.6V100.6ZM87.4 102.6L88.9 103.4L88.3 103.8H86L85.7 103.7L87.3 102.6H87.4ZM87.1 102.4L85.5 103.5L85.3 101.5L87.1 102.5V102.4ZM85.1 123.4L86.1 125.2L85.2 126.6L84.8 125.2L85.1 123.4V123.4ZM84.6 126.1L84.8 127.1L84.1 128.3L84.6 126.1V126.1ZM83.8 129.4L85 127.6L85.8 130.6L80.6 140.4L83.8 129.4V129.4ZM10.6 155.6L81.7 106.5L81.9 108.5L17.1 155.6H10.6ZM17.6 155.6L82 109V111L24 155.7H17.6V155.6ZM24.6 155.6L82 111.5V113.7L31 155.7H24.6V155.6ZM31.6 155.6L82 114.2C82 115 82 115.9 81.8 116.7L38 155.7H31.6V155.6ZM38.6 155.6L81.8 117.1L81.5 120.1L45 155.6H38.5H38.6ZM45.6 155.6L81.3 120.6L80.6 124.3L52 155.7H45.6V155.6ZM52.4 155.6L80.4 125C80.1 126.8 79.6 128.6 79 130.4L58.9 155.6H52.4V155.6ZM69.1 155.6H66.2L74 144L69 155.6H69.1ZM65.7 155.6H59.3L78.6 131.4C77.5 134.9 76.2 138.4 74.6 142.2L65.7 155.6V155.6ZM75.7 155.6L80 142.4L86 131L87 134.8L79.3 155.6H75.7V155.6ZM79.7 155.6L87.3 135.6L93 155.6H79.8H79.7ZM93.5 155.6L87.5 134.8L89 130.8L95.5 143.1L99.5 155.6H93.5ZM106.3 155.6C103.9 149.9 101.6 144.7 99.8 139.9L111.5 155.6H106.3ZM112 155.6L99.3 138.6C98 135.4 97 132.3 96.1 129.4L121 155.6H112V155.6ZM121.4 155.6L95.8 128.6L94.6 123.8L130.2 155.6H121.4ZM130.8 155.6L94.5 123.2L93.9 119.8L139.7 155.5H130.8V155.6ZM140.3 155.6L93.8 119.3L93.5 116.5L149.2 155.6H140.2H140.3ZM149.8 155.6L93.5 116.1L93.3 113.6L158.7 155.6H149.7H149.8ZM159.3 155.6L93.4 113.1V111L168.3 155.7H159.3V155.8V155.6ZM168.9 155.6L93.4 110.5L93.5 108.3L177.9 155.6H168.9ZM178.5 155.6L93.5 108L93.8 106L187.5 155.6H178.5ZM297.8 122.6L293.3 123.8H292.9L289.7 120.3C292.7 121 295.3 121.7 297.7 122.6H297.8ZM298 123.1L295.7 124.1L294.5 124L298 123V123.1ZM289.6 123.2L286.6 122.8L286.7 122.1L288.7 120.5L289.6 123.2ZM287.4 119.8L281.6 122.4H281.5L278.5 118.3L287.5 119.8H287.4ZM280.6 122.3H280L279.2 120.3L280.6 122.3V122.3ZM279.1 122.2L274.2 121.8L277.4 118.3L279.1 122.2ZM273.3 121.8L271.4 121.7L275.7 119.1L273.3 121.8V121.8ZM276.4 118L270.4 121.6H270.3L266.4 117.3C269.9 117.4 273.2 117.6 276.4 118ZM269.4 121.6H268.2L266.8 118.7L269.4 121.6V121.6ZM267.4 121.6L263.4 121.4L265.5 117.8L267.4 121.5V121.6ZM262.4 121.4H260.2L264.7 117.8L262.5 121.4H262.4ZM260.1 117.1H264.4L259.2 121.4H258.6L254.7 117.2H260.1V117.1ZM257.7 121.4H257.5L257 120.7L257.7 121.4ZM256.7 121.4L252.5 121.6L254.2 117.8L256.7 121.5V121.4ZM251.7 121.6L248.3 121.7L253.6 117.5L251.6 121.5L251.7 121.6ZM252.8 117.3L247.3 121.8H247.2L243 118.1C246.1 117.7 249.4 117.5 252.8 117.3V117.3ZM246.2 121.8H246L245 120.8L246.2 121.8ZM245.2 121.8L240.9 122.2L241.9 118.6L245.2 121.9V121.8ZM240 122.2L236.4 122.5L241 118.9L240 122.2ZM231 121.1V120.6L234 122.8L230.3 123.3L230.9 121.1H231ZM219.9 125.1L217.6 125.6L217.4 124.9L219.7 123.6L220.6 123.2L219.9 125.1V125.1ZM220.7 124.9C220.7 124.6 220.9 124.4 221 124.1L221.3 123.3L222.9 124.4L221.2 124.8L220.7 124.9V124.9ZM221.5 125.7L224.1 125.2L224.5 125.4L224.8 125.7H221.5ZM221.8 122.8C224.429 121.879 227.098 121.078 229.8 120.4L225.6 123.9L224.8 124.1L221.8 122.8ZM228.8 125.6H225.8L224.9 125L229.2 124.3C229.2 124.8 229 125.2 228.8 125.6ZM226.8 123.8L230.2 121L229.6 123.4L226.8 123.8V123.8ZM229.7 125.6L230.1 124.2L234.1 123.7L234.3 125.5H229.7V125.6ZM235.6 122.1H234L231.4 120.1L233.1 119.7C235.6 119.2 238.1 118.7 240.8 118.4L235.8 122.3L235.5 122.1H235.6ZM236.6 125.5L236.5 124.9L237.2 125.5H236.6ZM239 125.5H238.2L236.2 123.9V123.5L239.8 123.2L239 125.4V125.5ZM239.9 125.5L240.6 123.1L246 122.7L248.5 125.3L239.9 125.4V125.5ZM249.5 125.3L246.9 122.7L251.2 122.5L250 125.3H249.5V125.3ZM253.7 125.2H250.7L252 122.5H253.7V125.2ZM255.8 125.2L255.5 122.8L255.3 122.4H257.3L259.1 125.1H255.8V125.2ZM259.8 125.1L258.1 122.4H261.9L260.2 125.1H259.9H259.8ZM265.1 122.9L264.8 125.2H261.1L262.7 122.4H265.3L265.1 122.9V122.9ZM266.9 125.2V122.4L267.8 122.5L269.2 125.2H266.9V125.2ZM269.9 125.2L268.6 122.5L272.6 122.6L270.1 125.2H269.9V125.2ZM271 125.2L273.4 122.7L279.6 123.1L280.6 125.4L271 125.3V125.2ZM281.4 125.4L280.4 123.2L284 123.5L281.4 125.5V125.4ZM283.9 125.4H282.4L284.2 124.1L283.9 125.5V125.4ZM285.1 122.1L284.6 122.6H284.4L282.9 122.5L288.4 120H288.5L285.8 122H285.1V122.1ZM286.3 125.5L286.5 123.8L289.9 124.2L290.3 125.6H286.3V125.5ZM289.8 121.3L291.8 123.6L290.4 123.4L289.8 121.4V121.3ZM291 125.6L290.6 124.3L294.3 124.9L292.9 125.6H290.9H291ZM294.1 125.6L295.3 125C296.473 125.199 297.64 125.433 298.8 125.7H294L294.1 125.6ZM296.7 124.4L299.2 123.1L301.3 125.3L296.7 124.3V124.4ZM303 125.7H302.6L300.7 123.7L303.2 124.7L303 125.7V125.7Z"
              fill="#F3B304"
            />
          </svg> */}
          {/* <div className={style.socialLinks}>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="30"
            height="70"
          >
            <g>
              <g>
                <path d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z" />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <svg
            width="30"
            height="70"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
          </svg>
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="70"
          >
            <title>Twitter icon</title>
            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
          </svg>
          <svg
            width="30"
            height="70"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z" />
          </svg>
        </div> */}
        </section>
      </div>
    );
  }
}

export default PageBody;

//get your delivery on time.
//send your goods, fast, comfortable and safe
//Coonecting people improving lives.

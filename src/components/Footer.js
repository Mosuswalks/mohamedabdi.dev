import React from "react"

function Footer({ textColor, color }) {
  return (
    <div>
      <div className="copyright">
        <div className="container">
          Copyright ©{" "}
          <span style={{ textDecorationLine: "underline", marginBottom: 2 }}>
            Mohamed Abdi
          </span>{" "}
          (2020)
        </div>
      </div>

      <style jsx>
        {`
          .underline {
            border-bottom-width: 2;
            border-color: #000;
          }
          .copyright {
            display: flex;
            flex: 1;
            padding: 20px;
            font-size: 9.5pt;
            color: ${textColor};
            background-color: ${color};
            // border-top: 1px solid #fff;
          }
          .container {
            text-align: center;
            flex-direction: row;
            font-size: 12.5pt;
            color: #fff;
          }
          @media (max-width: 480px) {
            .container {
              font-size 14px;
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Footer

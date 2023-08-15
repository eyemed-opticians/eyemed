// export text

////////////////////////////////////////////
function createText_(productsTable, order) {

    // get first name
    const name = require("./name")(order.name);

    const text = `
        <!DOCTYPE HTML> 
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>

                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="x-apple-disable-message-reformatting">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">

                <title></title>

                <style>

                    table,
                    td {
                        color: #000000;
                    }
                    a {
                        color: #0000ee;
                        text-decoration: underline;
                    }
                    @media only screen and(min-width: 660px) {
                        .u-row {
                            width: 640px !important;
                        }
                        .u-row .u-col {
                            vertical-align: top;
                        }
                    
                        .u-row .u-col-26p25 {
                            width: 168px !important;
                        }
                    
                        .u-row .u-col-50 {
                            width: 320px !important;
                        }
                    
                        .u-row .u-col-73p75 {
                            width: 472px !important;
                        }
                    
                        .u-row .u-col-100 {
                            width: 640px !important;
                        }
                    
                    }
                
                    @media(max-width: 660px) {
                        .u-row-container {
                            max-width: 100% !important;
                            padding-left: 0 !important;
                            padding-right: 0 !important;
                        }
                        .u-row .u-col {
                            min-width: 320px !important;
                            max-width: 100% !important;
                            display: block !important;
                        }
                        .u-row {
                            width: calc(100% - 40px) !important;
                        }
                        .u-col {
                            width: 100% !important;
                        }
                        .u-col > div {
                            margin: 0 auto;
                        }
                    }
                    body {
                        margin: 0;
                        padding: 0;
                    }
                
                    table,
                    tr,
                    td {
                        vertical-align: top;
                        border-collapse: collapse;
                    }
                
                    p {
                        margin: 0;
                    }
                
                    .ie-container table,
                    .mso-container table {
                        table-layout: fixed;
                    }
                
                    * {
                        line-height: inherit;
                    }
                
                    a[x-apple-data-detectors='true'] {
                        color: inherit !important;
                        text-decoration: none !important;
                    }
                </style>
                
                
            </head>
                
            <body class="clean-body" style="margin: 5rem 0 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
                
                
                <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0; -mso-table-lspace: 0pt; -mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0"> <tbody>
                        <tr style="vertical-align: top">
                            <td
                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                

                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                

                                                <div class="u-col u-col-100" style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;"> <div style="width: 100% !important;">
                
                                                    <div
                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                
                                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                            <tr>
                                                                                <td style="padding-right: 0px;padding-left: 0px;" align="center">
                
                                                                                    <img align="center" border="0" src="https://res.cloudinary.com/eyemed-opticians/image/upload/v1629212364/email/logo_tr_t0lwcc.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 181px;" width="181"/>
                
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                
                
                                                    </div>
                
                                                </div>
                                            </div>
                
                
                                        </div>
                                    </div>
                                </div>
                
                
                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #fda664;">
                                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                

                                                <div class="u-col u-col-100" style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;"> <div
                                                    style="width: 100% !important;">
                                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                
                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:50px 15px;font-family:arial,helvetica,sans-serif;" align="left">
                
                                                                        <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                            <p style="font-size: 14px; line-height: 140%; text-align: center;">
                                                                                <span style="color: #ffffff; font-size: 14px; line-height: 19.6px; font-family: 'times new roman', times;">
                                                                                    <strong>
                                                                                        <span style="font-size: 36px; line-height: 50.4px;">Thank you ${name[0]},</span>
                                                                                    </strong>
                                                                                </span><br/><span style="color: #ffffff; font-size: 14px; line-height: 19.6px; font-family: 'times new roman', times;">
                                                                                    <strong>
                                                                                        <span style="font-size: 36px; line-height: 50.4px;">your order has been received</span>
                                                                                    </strong>
                                                                                </span>
                                                                            </p>
                                                                        </div>
                
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                
                
                
                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #fd6f01;">
                                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                

                                                <div class="u-col u-col-100" style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;"> <div
                                                    style="width: 100% !important;">
                
                                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                
                                                                        <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                            <p style="font-size: 14px; line-height: 140%; text-align: center;">
                                                                                <span style="color: #ffffff; font-size: 16px; line-height: 22.4px;">
                                                                                    <strong>
                                                                                        <span style="line-height: 22.4px; font-size: 16px;">Order ID : ${order.id}</span>
                                                                                    </strong>
                                                                                </span>
                                                                            </p>
                                                                        </div>
                
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                
                
                                                    </div>
                
                                                </div>
                                            </div>
                
                
                                        </div>
                                    </div>
                                </div>
                
                
                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                
                
                                            <div class="u-col u-col-50" style="max-width: 320px;min-width: 320px;display: table-cell;vertical-align: top;"> <div
                                                    style="width: 100% !important;">
                
                                                    <div
                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 15px;font-family:arial,helvetica,sans-serif;" align="left">
                
                                                                        <div style="line-height: 160%; text-align: left; word-wrap: break-word;">
                                                                            <p style="font-size: 14px; line-height: 160%; text-align: center;">
                                                                                <span style="font-size: 20px; line-height: 32px; color: #131313;">
                                                                                    <strong>
                                                                                        <span style="line-height: 32px; font-size: 20px;">Eyemed Optical Suppliers Zambia Limited</span>
                                                                                    </strong>
                                                                                </span><br/><span style="font-size: 15px; line-height: 32px; color: #4e4e4e;">
                                                                                    <strong>
                                                                                        <span style="line-height: 32px; font-size: 15px;">Lonhro House, First Floor Suite# 1</span>
                                                                                    </strong>
                                                                                </span><br/><span style="font-size: 15px; line-height: 32px; color: #4e4e4e;">
                                                                                    <strong>
                                                                                        <span style="line-height: 32px; font-size: 15px;">Cairo Road - LUSAKA</span>
                                                                                    </strong>
                                                                                </span>
                                                                            </p>
                                                                        </div>
                
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                
                
                                                    </div>
                
                                                </div>
                                            </div>
                
                
                                            <div class="u-col u-col-50" style="max-width: 320px;min-width: 320px;display: table-cell;vertical-align: top;">
                                                <div style="width: 100% !important;">
                
                                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;" align="left">
                
                                                                        <div style="line-height: 130%; text-align: left; word-wrap: break-word;">
                                                                            <p style="font-size: 14px; line-height: 130%; text-align: center;">
                                                                                <span style="font-size: 48px; line-height: 62.4px;">
                                                                                    <strong>
                                                                                        <span style="line-height: 62.4px; font-family: 'times new roman', times; font-size: 48px;">K${order.cart.totalCost}</span>
                                                                                    </strong>
                                                                                </span><br/><strong>
                                                                                    Order ID :
                                                                                    <span style="font-family: 'times new roman', times; font-size: 20px; line-height: 26px; color: #7e8c8d;">${order.id}</span>
                                                                                </strong>
                                                                            </p>
                                                                        </div>
                
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                
                
                                                    </div>
                
                                                </div>
                                            </div>
                
                
                                        </div>
                                    </div>
                                </div>

                                ${productsTable}
                
                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                
                
                                                <div class="u-col u-col-100" style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;"> <div style="width: 100% !important;">
                
                                                    <div
                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 20px;font-family:arial,helvetica,sans-serif;" align="left">
                
                                                                        <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                            <p style="font-size: 14px; line-height: 140%; text-align: center;">
                                                                                <strong>
                
                                                                                    <span style="font-size: 20px; line-height: 28px;">Total </span> &nbsp; &nbsp;
                
                                                                                    <span style="font-size: 20px; line-height: 28px; color: #6d6d6d;">Price : K${order.cart.totalCost}</span> &nbsp; &nbsp;

                                                                                    <span style="font-size: 20px; line-height: 28px; color: #6d6d6d;">Qty : ${order.cart.totalQty}</span>
                
                                                                                </strong>
                                                                            </p>
                                                                        </div>
                
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                
                
                                                    </div>
                
                                                </div>
                                            </div>
                
                
                                        </div>
                                    </div>
                                </div>
                
                
                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                

                
                                                <div class="u-col u-col-100" style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;"> <div
                                                    style="width: 100% !important;">
                
                                                    <div
                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                
                                                                        <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0; -mso-table-lspace: 0pt; -mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                            <tbody>
                                                                                <tr style="vertical-align: top">
                                                                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px; -mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                                        <span>&#160;</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                
                
                                                    </div>
                
                                                </div>
                                            </div>
                

                                        </div>
                                    </div>
                                </div>
                
                
                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                

                
                                                <div class="u-col u-col-100" style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;"> <div
                                                    style="width: 100% !important;">
                
                                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
                
                                                                        <div align="center">
                
                                                                            <a href="https://eyemedopticians.com" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #000000; background-color: #ffffff; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; -mso-border-alt: none;border-top-width: 2px; border-top-style: solid; border-top-color: #CCC; border-left-width: 2px; border-left-style: solid; border-left-color: #CCC; border-right-width: 2px; border-right-style: solid; border-right-color: #CCC; border-bottom-width: 2px; border-bottom-style: solid; border-bottom-color: #CCC;">
                                                                                <span style="display:block;padding:10px 20px;line-height:120%;">
                                                                                    <strong>
                                                                                        <span style="font-size: 16px; line-height: 19.2px;">
                                                                                            <span style="line-height: 19.2px; font-size: 16px;">Back to shop</span>
                                                                                        </span>
                                                                                    </strong>
                                                                                </span>
                                                                            </a>
                
                                                                        </div>
                
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                
                
                                                    </div>
                
                                                </div>
                                            </div>
                
                
                                        </div>
                                    </div>
                                </div>
                
                
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                
                
                <br><br>
                
                <div style="background-color:#c7c7c7;">
                    <div class="block-grid" style="min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #c7c7c7;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color:#c7c7c7;">
                

                                <div class="col num12" style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;"> <div
                                    class="col_cont" style="width:100% !important;">
                
                                    <div
                                        style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                
                                        <div align="center" class="img-container center fixedwidth" style="padding-right: 0px;padding-left: 0px; padding-top: 3rem;">
                
                                            <img align="center" border="0" class="center fixedwidth" src="https://res.cloudinary.com/eyemed-opticians/image/upload/v1629212364/email/logo_tr_t0lwcc.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 163px; max-width: 100%; display: block;" width="163"/>
                
                                        </div>
                                        <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; -mso-table-lspace: 0pt; -mso-table-rspace: 0pt;" valign="top" width="100%">
                                            <tbody>
                                                <tr style="vertical-align: top;" valign="top">
                                                    <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">

                                                        <table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
                                                            <tbody>
                                                                <tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
                                                                    <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top">
                                                                        <a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/eyemed-opticians/image/upload/v1629211806/email/facebook2x_io9hnh.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="facebook" width="32"/></a>
                                                                    </td>
                                                                    <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top">
                                                                        <a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/eyemed-opticians/image/upload/v1629211806/email/twitter2x_mow0ck.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="twitter" width="32"/></a>
                                                                    </td>
                                                                    <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top">
                                                                        <a href="https://www.linkedin.com/" target="_blank"><img alt="Linkedin" height="32" src="https://res.cloudinary.com/eyemed-opticians/image/upload/v1629211806/email/linkedin2x_pmiyee.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="linkedin" width="32"/></a>
                                                                    </td>
                                                                    <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 2.5px; padding-left: 2.5px;" valign="top">
                                                                        <a href="https://www.instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/eyemed-opticians/image/upload/v1629211806/email/instagram2x_rlv5my.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="instagram" width="32"/></a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                
                                        <div style="color:#ffffff;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                            <div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; -mso-line-height-alt: 17px;">
                                                <p style="margin: 0; text-align: center; line-height: 1.2; word-break: break-word; -mso-line-height-alt: 17px; margin-top: 0; margin-bottom: 0;">
                                                    <a href="http://www.eyemedopticians.com/" rel="noopener" style="color: #ffffff;" target="_blank">Visit Website</a>
                                                </p>
                                                <br>
                                                <p style="margin: 0; text-align: center; line-height: 1.2; word-break: break-word; -mso-line-height-alt: 17px; margin-top: 0; margin-bottom: 0;"></p>
                                                <p style="margin: 0; text-align: center; line-height: 1.2; word-break: break-word; -mso-line-height-alt: 17px; margin-top: 0; margin-bottom: 0;">2021 © All rights reserved Eyemed Opticians Zambia Limited</p>
                                            </div>
                                        </div>
                

                                    </div>
                
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>
                
            </body>
        </html>    
    `

    return text;
}

// exports
module.exports = createText_;
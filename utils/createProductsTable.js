// export styled products table

function createProductsTable (order) { 
    var productsTable = "";
    order.cart.items.forEach(product => {
        productsTable += 
        `
            <div class="u-row-container" style="padding: 0px;background-color: transparent">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">

                        <div class="u-col u-col-100" style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;"> <div
                            style="width: 100% !important;">
                            <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                        <tr>
                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 15px;font-family:arial,helvetica,sans-serif;" align="left">
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
                        <div class="u-col u-col-26p25" style="max-width: 320px;min-width: 168px;display: table-cell;vertical-align: top;"> <div style="width: 100% !important;">
                            <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                        <tr>
                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:50px 20px 55px;font-family:arial,helvetica,sans-serif;" align="left">
                                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                    <tr>
                                                        <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                            <img align="center" border="0" src=${product.image} alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 115px;" width="115"/>
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

                    <div class="u-col u-col-73p75" style="max-width: 320px;min-width: 472px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                            <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                        <tr>
                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:50px 20px 55px;font-family:arial,helvetica,sans-serif;" align="left">
                                                <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
                                                    <p style="font-size: 14px; line-height: 140%;">
                                                        <span style="font-size: 20px; line-height: 28px;">
                                                            <strong>
                                                                <span style="line-height: 28px; font-size: 20px;">${product.title}</span>
                                                            </strong>
                                                        </span>
                                                    </p>
                                                    <p style="font-size: 14px; line-height: 140%;">
                                                        <span style="font-size: 16px; line-height: 22.4px; color: #7e8c8d;">
                                                            <strong>
                                                                <span style="line-height: 22.4px; font-size: 16px;">Price : ${product.price}
                                                                </span>
                                                            </strong>
                                                        </span>
                                                    </p>

                                                    <p style="font-size: 14px; line-height: 140%;">
                                                        <span style="font-size: 16px; line-height: 22.4px; color: #7e8c8d;">
                                                            <strong>
                                                                <span style="line-height: 22.4px; font-size: 16px;">Qty : ${product.qty}
                                                                </span>
                                                            </strong>
                                                        </span>
                                                    </p>
                                                    <p style="font-size: 14px; line-height: 140%;">
                                                        <span style="font-size: 16px; line-height: 22.4px; color: #7e8c8d;">
                                                            <strong>
                                                                <span style="line-height: 22.4px; font-size: 16px;">Subtotal : ${product.subTotal}
                                                                </span>
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
        `
    });

    return productsTable;
}

module.exports = createProductsTable;
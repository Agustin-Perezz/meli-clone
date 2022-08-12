import { BlockDropdown } from "../modal-dropdown/BlockDropdown"

export const PaymentsWarranty = () => {
  return (
    <div className="warranty">
      <h3 className="warranty__title">Garantía</h3>
      <span className="warranty__subtitle">Compra Protegida con Mercado Pago</span>
      <span className="warranty__small">Recibí el producto que esperabas o te devolvemos tu dinero</span>
      <span className="warranty__subtitle">Garantía del vendedor</span>
      <span className="warranty__small">Garantía de fábrica: 6 meses</span>
      <BlockDropdown content_title="Conocer más sobre garantía"/>
    </div>
  )
}
 
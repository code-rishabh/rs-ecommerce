import { PageHero } from "../../components/PageHero";

export default function PoliciesPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Policies & Legal"
        subtitle="Comprehensive policies and terms governing Red Stone USA Inc's enterprise ecommerce platform. Review our policies to understand your rights and obligations."
        badge="Legal Information"
      />

      <section className="border-b border-zinc-200 bg-white py-16">
        <div className="container-custom">
          {/* Quick Navigation Menu */}
          <div className="mb-12 rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-zinc-900">Quick Navigation</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="#return-policy"
                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all hover:border-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <span>↩️</span>
                <span>Return Policy</span>
              </a>
              <a
                href="#refund-policy"
                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all hover:border-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <span>💰</span>
                <span>Refund Policy</span>
              </a>
              <a
                href="#shipping-policy"
                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all hover:border-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <span>🚚</span>
                <span>Shipping Policy</span>
              </a>
              <a
                href="#cancellation-policy"
                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all hover:border-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <span>❌</span>
                <span>Cancellation Policy</span>
              </a>
              <a
                href="#terms-of-service"
                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all hover:border-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <span>📜</span>
                <span>Terms of Service</span>
              </a>
              <a
                href="#terms-conditions"
                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all hover:border-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <span>⚖️</span>
                <span>Terms & Conditions</span>
              </a>
            </div>
          </div>

          {/* Return Policy */}
          <div id="return-policy" className="mb-12 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm scroll-mt-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="text-4xl">↩️</div>
              <h2 className="text-3xl font-extrabold text-zinc-900">1. Return Policy</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Eligibility for Returns</h3>
                
                <div className="mb-4">
                  <h4 className="mb-2 text-lg font-semibold text-zinc-800">Time Period</h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                    <li><strong>Standard items:</strong> Returns accepted within 30 days of the delivery date.</li>
                    <li><strong>Custom-configured or special-order items:</strong> Returns accepted within 14 days of the delivery date.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-lg font-semibold text-zinc-800">Condition Requirements</h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                    <li>Products must be completely unopened and in their original packaging, including all accessories, manuals, and components.</li>
                    <li>Items must be in resellable condition, with original serial numbers intact.</li>
                    <li>If a product is opened, even if unused, a 25% restocking fee will apply.</li>
                    <li>If Red Stone USA Inc. determines upon inspection that the product has been used, opened, or tampered with, Red Stone reserves the full right to deny the return and refund.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-lg font-semibold text-zinc-800">Eligible Items</h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                    <li>Standard IT hardware (desktops, laptops, monitors, networking equipment)</li>
                    <li>Unopened software licenses</li>
                    <li>Accessories in original, sealed packaging</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-lg font-semibold text-zinc-800">Non-Returnable Items</h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                    <li>Custom-configured systems or special-order items after 14 days</li>
                    <li>Opened software products or downloadable licenses</li>
                    <li>Products damaged due to customer mishandling</li>
                    <li>Items missing original packaging or components</li>
                    <li>Selective products marked as non-returnable at the time of purchase</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Return Process</h3>
                <ol className="ml-6 list-decimal space-y-2 text-sm text-zinc-700">
                  <li>Contact our support team at <a href="mailto:info@redstoneusainc.com" className="text-red-600 hover:underline">info@redstoneusainc.com</a> or <a href="tel:+19199315078" className="text-red-600 hover:underline">+1 919-931-5078</a> to request an RMA number.</li>
                  <li>Provide proof of purchase and a detailed reason for return.</li>
                  <li>Securely package the product in its original packaging.</li>
                  <li>Ship the item to the designated return facility within 15 business days of RMA approval.</li>
                  <li>Return shipping costs are the responsibility of the sender, unless the return is due to a defective product.</li>
                </ol>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Restocking Fees</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li><strong>0% fee:</strong> For defective items or shipping errors confirmed by Red Stone USA Inc.</li>
                  <li><strong>25% fee:</strong> For items that are opened (even if unused), missing packaging, or missing any components.</li>
                </ul>
              </div>

              <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                <h4 className="mb-2 text-sm font-bold text-amber-900">Additional Notes</h4>
                <ul className="ml-4 list-disc space-y-1 text-sm text-amber-800">
                  <li>Red Stone USA Inc. reserves the right to inspect all returned products.</li>
                  <li>If a product is found to be opened, used, or not in its original condition, Red Stone may reject the return and deny the refund.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Refund Policy */}
          <div id="refund-policy" className="mb-12 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm scroll-mt-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="text-4xl">💰</div>
              <h2 className="text-3xl font-extrabold text-zinc-900">2. Refund Policy</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Refund Processing Timeline</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li><strong>Standard Refunds:</strong> Processed within 7–10 business days after the returned item is received and successfully inspected.</li>
                  <li><strong>Credit Card Refunds:</strong> May take an additional 2–3 business days to appear on the customer's statement depending on the issuing bank.</li>
                  <li><strong>Wire Transfer / ACH Refunds (B2B):</strong> Processed within 3–5 business days after approval.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Refund Eligibility Requirements</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li>Products must be completely unopened and in original manufacturer packaging to qualify for a full refund.</li>
                  <li>Return shipping is the responsibility of the sender, unless the return is due to a verified defect or shipping error by Red Stone USA Inc.</li>
                  <li>If the product is opened, even if unused, a 25% restocking fee will be applied.</li>
                  <li>Selective products may be non-returnable, which will be clearly mentioned at the time of purchase.</li>
                  <li>If Red Stone, upon inspection, finds that the product has been used, opened, or tampered with, Red Stone reserves the full right to deny both return and refund.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Refund Methods</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li>Refunds will be issued to the original payment method used for the purchase.</li>
                  <li>For enterprise or B2B customers using purchase orders, refunds will be issued as:
                    <ul className="ml-6 mt-2 list-disc space-y-1">
                      <li>Credit memos for future orders, or</li>
                      <li>Check payments, depending on customer preference.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Partial Refunds</h3>
                <p className="mb-2 text-sm text-zinc-700">Partial refunds may apply when:</p>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li>Accessories, cables, manuals, or packaging materials are missing (deductions based on replacement cost).</li>
                  <li>Items show signs of use beyond standard inspection.</li>
                  <li>Items are returned outside original packaging or in compromised condition.</li>
                  <li>Products are opened, even if unused (25% restocking fee applies).</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Non-Refundable Charges</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li>Original shipping and handling fees</li>
                  <li>Custom configuration or build-to-order service fees</li>
                  <li>Installation, setup, or onsite services already completed</li>
                  <li>Express or expedited shipping charges</li>
                </ul>
              </div>

              <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                <h4 className="mb-2 text-sm font-bold text-amber-900">Red Stone Rights</h4>
                <p className="mb-2 text-sm text-amber-800">Red Stone USA Inc. reserves the right to:</p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-amber-800">
                  <li>Inspect all returned products before approving a refund.</li>
                  <li>Deny refunds for any product found to be used, opened, damaged, tampered with, or failing to meet return eligibility requirements.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div id="terms-of-service" className="mb-12 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm scroll-mt-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="text-4xl">📜</div>
              <h2 className="text-3xl font-extrabold text-zinc-900">3. Terms of Service</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Scope of Services</h3>
                <p className="text-sm text-zinc-700">
                  Red Stone USA Inc. provides IT hardware procurement, VR/AR solutions, custom software development, and technology consulting services to enterprise and business customers.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">User Obligations</h3>
                
                <div className="mb-4">
                  <h4 className="mb-2 text-lg font-semibold text-zinc-800">Customer Responsibilities:</h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                    <li>Provide accurate technical specifications and requirements</li>
                    <li>Ensure proper installation environment for hardware</li>
                    <li>Maintain equipment according to manufacturer guidelines</li>
                    <li>Comply with all software licensing terms</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-semibold text-zinc-800">Prohibited Uses:</h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                    <li>Resale of products without written authorization</li>
                    <li>Reverse engineering of proprietary solutions</li>
                    <li>Use of equipment for unlawful purposes</li>
                    <li>Unauthorized modification of custom configurations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Intellectual Property</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li>All custom software and solutions remain property of Red Stone USA Inc. unless otherwise specified</li>
                  <li>Customer receives usage rights as outlined in specific service agreements</li>
                  <li>Third-party software subject to original manufacturer licensing terms</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Limitation of Liability</h3>
                <p className="text-sm text-zinc-700">
                  Red Stone USA Inc.'s liability is limited to the purchase price of products or services. We are not liable for indirect, consequential, or punitive damages.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Data Protection</h3>
                <p className="text-sm text-zinc-700">
                  We implement industry-standard security measures to protect customer data and maintain confidentiality of business information.
                </p>
              </div>
            </div>
          </div>

          {/* Shipping Policy */}
          <div id="shipping-policy" className="mb-12 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm scroll-mt-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="text-4xl">🚚</div>
              <h2 className="text-3xl font-extrabold text-zinc-900">4. Shipping Policy</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Shipping Methods and Timeline</h3>
                
                <div className="mb-4 rounded-lg bg-blue-50 border border-blue-200 p-4">
                  <h4 className="mb-2 text-lg font-semibold text-blue-900">Standard Shipping (3-7 business days):</h4>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-blue-800">
                    <li>Free shipping on orders over $50</li>
                    <li>$10 flat rate for orders under $50</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-purple-50 border border-purple-200 p-4">
                  <h4 className="mb-2 text-lg font-semibold text-purple-900">Express Shipping (1-3 business days):</h4>
                  <p className="text-sm text-purple-800">Expedited fees may apply for special orders</p>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Processing Time</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li><strong>Standard Items:</strong> 2-5 business days</li>
                  <li><strong>Custom Configurations:</strong> 5-15 business days</li>
                  <li><strong>Special Orders:</strong> 2-6 weeks depending on manufacturer</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Shipping Restrictions</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li>Delivery within main land United States only</li>
                  <li>No shipping to PO boxes for hardware orders</li>
                  <li>Hazardous materials restrictions apply to certain battery-powered devices</li>
                  <li>International shipping available for select products (additional documentation required)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Delivery Terms</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li>Risk of loss transfers upon delivery to carrier</li>
                  <li>Customer responsible for inspection upon delivery</li>
                  <li>Damaged or missing items must be reported within 5 business days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Order Cancellation Policy */}
          <div id="cancellation-policy" className="mb-12 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm scroll-mt-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="text-4xl">❌</div>
              <h2 className="text-3xl font-extrabold text-zinc-900">5. Order Cancellation Policy</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Cancellation Window</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li><strong>Custom Configurations:</strong> Orders may be cancelled within 4 hours of placement without penalty.</li>
                  <li><strong>Special Orders:</strong> Non-cancellable once manufacturer confirmation is received.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Order Processing Status & Cancellation Eligibility</h3>
                
                <div className="mb-4 rounded-lg bg-emerald-50 border border-emerald-200 p-4">
                  <h4 className="mb-2 text-sm font-bold text-emerald-900">If order processing has not started:</h4>
                  <p className="text-sm text-emerald-800">Cancellation will be accepted and a full refund will be issued.</p>
                </div>

                <div className="mb-4 rounded-lg bg-yellow-50 border border-yellow-200 p-4">
                  <h4 className="mb-2 text-sm font-bold text-yellow-900">If the order is already in process:</h4>
                  <p className="text-sm text-yellow-800">Cancellation may still be possible, but cancellation charges will apply based on the stage of processing and production costs incurred.</p>
                </div>

                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <h4 className="mb-2 text-sm font-bold text-red-900">If the order is fully processed and shipped:</h4>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-red-800">
                    <li>The order cannot be directly cancelled.</li>
                    <li>The customer must receive the shipment, ensure it remains unopened, and then return it to Red Stone USA Inc.</li>
                    <li>Once Red Stone receives the returned item, an inspection will be conducted.</li>
                    <li>If the product is found to be 100% unopened, unused, and in perfect condition, a full refund will be issued.</li>
                    <li>If the product is opened, used, damaged, or not in original condition, Red Stone reserves the right to:
                      <ul className="ml-4 mt-1 list-disc space-y-1">
                        <li>Deny the refund, or</li>
                        <li>Issue a partial refund based on the product's returned condition and applicable restocking or damage fees.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Cancellation Process</h3>
                <ol className="ml-6 list-decimal space-y-2 text-sm text-zinc-700">
                  <li>Contact customer service immediately at <a href="mailto:info@redstoneusainc.com" className="text-red-600 hover:underline">info@redstoneusainc.com</a> or <a href="tel:+19199315078" className="text-red-600 hover:underline">+1 919-931-5078</a>.</li>
                  <li>Provide your order number and the reason for cancellation.</li>
                  <li>A written confirmation of cancellation status will be provided within 2 hours during business hours.</li>
                </ol>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Cancellation Fees</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li>25% of the order value for orders already in process.</li>
                  <li>Custom items: Full payment is required after order processing.</li>
                  <li>If the order has shipped, cancellation follows the return & inspection process, and fees may apply depending on condition.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div id="terms-conditions" className="mb-12 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm scroll-mt-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="text-4xl">⚖️</div>
              <h2 className="text-3xl font-extrabold text-zinc-900">6. Terms & Conditions</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Agreement Acceptance</h3>
                <p className="text-sm text-zinc-700">
                  By placing an order, making a purchase, or engaging with Red Stone USA Inc.'s products or services, the customer agrees to these Terms & Conditions and all referenced policies, including the Return Policy, Refund Policy, and Order Cancellation Policy.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Pricing and Payment</h3>
                
                <div className="mb-4">
                  <h4 className="mb-2 text-lg font-semibold text-zinc-800">Payment Terms</h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                    <li>New customers may pay via credit card or wire transfer.</li>
                    <li>Purchase orders are accepted from qualified enterprise and government customers.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-lg font-semibold text-zinc-800">Price Validity</h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                    <li>All quoted prices are valid for 30 days, unless otherwise specified.</li>
                    <li>Prices may change due to manufacturer price updates, market shifts, or currency fluctuations for international orders.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-semibold text-zinc-800">Credit Card Billing Rules</h4>
                  <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                    <li>Billing address and shipping address must be the same for all credit card transactions.</li>
                    <li>Orders with mismatched addresses may be delayed, require verification, or be declined for security reasons.</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                <h3 className="mb-3 text-xl font-bold text-red-900">Fraud Prevention & Liability</h3>
                <p className="mb-2 text-sm text-red-800">
                  In cases involving fraudulent transactions such as orders placed using another person's credit card, identity, or unauthorized details; Red Stone USA Inc. will not be held responsible if:
                </p>
                <ol className="ml-6 list-decimal space-y-2 text-sm text-red-800">
                  <li>The transaction was processed with valid payment authorization, and</li>
                  <li>The product was successfully delivered to the shipping address entered at checkout, regardless of the billing address or identity used.</li>
                </ol>
                <p className="mt-2 text-sm text-red-800">
                  Once delivery is completed as per order details, Red Stone is not liable for any claims arising from unauthorized use of the payment method or identity fraud.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Product Information</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li>All product descriptions, specifications, and technical data are based on information provided by the manufacturer.</li>
                  <li>Product images are illustrative and may differ from the actual product.</li>
                  <li>Manufacturers may update product specifications without prior notice.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Warranty Terms</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm text-zinc-700">
                  <li><strong>Hardware Products:</strong> Covered under the manufacturer's standard warranty (typically 1–3 years).</li>
                  <li><strong>Custom Solutions:</strong> Red Stone USA Inc. provides a 90-day warranty on custom-developed components.</li>
                  <li><strong>Professional Services:</strong> Installation, configuration, and onsite services include a 30-day warranty from completion date.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Privacy & Confidentiality</h3>
                <p className="mb-2 text-sm text-zinc-700">
                  Red Stone USA Inc. follows strict confidentiality practices to safeguard customer data. Information shared with us; whether technical, personal, or order-related; is used exclusively for order processing, delivery, support, and internal business operations.
                </p>
                <p className="text-sm text-zinc-700">
                  No customer data is shared with third parties except as required for order fulfillment, fraud prevention, legal compliance, or customer-requested services.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Dispute Resolution</h3>
                <p className="text-sm text-zinc-700">
                  Any dispute, claim, or disagreement arising from purchases, services, or policies will be resolved exclusively through binding arbitration in the state of Delaware, in accordance with the rules of the American Arbitration Association (AAA).
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Governing Law</h3>
                <p className="text-sm text-zinc-700">
                  These Terms & Conditions, along with all related policies, are governed by and interpreted under the laws of Delaware, United States, without regard to conflict-of-law principles.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">Updates & Modifications</h3>
                <p className="text-sm text-zinc-700">
                  Red Stone USA Inc. reserves the right to revise, modify, or remove any portion of these Terms & Conditions at any time, without prior notice. Continued use of our products, services, or website constitutes acceptance of the latest version of these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="rounded-2xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-zinc-900">Contact Information</h3>
            <div className="space-y-3 text-sm text-zinc-700">
              <p className="font-semibold text-zinc-900">Red Stone USA Inc.</p>
              <p>16192 Coastal Highway,<br />Lewes, DE 19958-3608</p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@redstoneusainc.com" className="text-red-600 hover:underline">info@redstoneusainc.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+19199315078" className="text-red-600 hover:underline">+1 919-931-5078</a>
              </p>
              <p>
                <strong>Business Hours:</strong> Monday-Friday, 8:00 AM - 6:00 PM EST
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-700 hover:scale-105"
              >
                Contact Support
              </a>
              <a
                href="mailto:info@redstoneusainc.com"
                className="rounded-lg border-2 border-red-600 bg-white px-6 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

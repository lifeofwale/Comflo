<template>
  <main class="col-sm-11 ml-sm-auto col-md-11 col-lg-10 dashboard-content" role="main">
    <div class="width-100 mt-lg-5 ">
      <!--<h3 class="text-gray">Required Documents</h3>-->
      <!--<p>To Export Agricultural Commodities from Nigeria</p>-->
      <div class="col-md-3 pull-right">
        <div class="row">
          <div class="col-md-1 p-4 pink-bg ">
          </div>
          <div class="col-md-6 mt-3 text-center">
            Required later
          </div>
        </div>
      </div>
      <div class="col-md-3 pull-right">
        <div class="row">
          <div class="col-md-1 p-4 lime-bg ">
          </div>
          <div class="col-md-6 mt-3 text-center">
            Required now
          </div>
        </div>
      </div>
    </div>

    <section style="display: table" class="row home-content mt-lg-5">
      <h5 class="mb-3">1. Commercial and Regulatory</h5>
      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Nigerian Export Promotion Council (NEPC) Export License</h5>
            <!--<p>Nigeria Exportation Promotion Council</p>-->
          </div>
          <div class="col-md-8 pull-left lime-bg p-4">
            <p class="text-dark">Export license is issued by the NEPC authorizing the holder to export the stated produce out of Nigeria</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Bill of Lading</h5>
          </div>
          <div class="col-md-8 pull-left pink-bg p-4">
            <p class="text-dark">Contracts between the owner of the goods and carrier. Usually serves as a legal claim/proof of ownership to the cargo being shipped</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Certificate of Location</h5>
          </div>
          <div class="col-md-8 pull-left pink-bg p-4">
            <p class="text-dark">Certain jurisdictions are increasing requesting for certificates of location for traceability reasons</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Insurance certificate</h5>
          </div>
          <div class="col-md-8 pull-left pink-bg p-4">
            <p class="text-dark">If the seller provides insurance, the insurance certificate states the type and amount of coverage</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Final commercial invoice</h5>
          </div>
          <div class="col-md-8 pull-left pink-bg p-4">
            <p class="text-dark">This is an accounting document prepared by the exporter in the name of the importer or his agent. It takes care of charges to enable Customs in the importing country to assess duty payable.</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Pro forma invoice</h5>
          </div>
          <div class="col-md-8 pull-left pink-bg p-4">
            <p class="text-dark">This document is similar to a commercial invoice; it contains details about an international sale of goods and is often required by the importer’s government for foreign exchange allocation.</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Consular invoice</h5>
          </div>
          <div class="col-md-8 pull-left pink-bg p-4">
            <p class="text-dark">This is filled on an official form obtained in the consulate of the country of the designation. It enables the invoice to be validated or checked by the importing country’s consulate. Mostly applicable for US bound exports.</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Certified invoice</h5>
          </div>
          <div class="col-md-8 pull-left p-4 pink-bg">
            <p class="text-dark">This invoice is needed for independent verification such as a certified invoice by the chamber of commerce, declaration of location of goods and value.</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Packaging list</h5>
          </div>
          <div class="col-md-8 pull-left pink-bg p-4">
            <p class="text-dark">The document supplements the commercial invoice when quantities, weights or contents of individual units in a shipment vary.</p>
          </div>
        </router-link>
      </div>

      <h5 class="mt-3 mb-3">2. Quality</h5>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Certificate of quality and fumigation</h5>
          </div>
          <div class="col-md-8 pull-left p-4 pink-bg">
            <p class="text-dark">This certificate is issued by the Federal Produce Inspection Service for all primary agricultural commodities for exports as evidence of quality.</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>NAFDAC certificate</h5>
          </div>
          <div class="col-md-8 pull-left p-4 pink-bg">
            <p class="text-dark">NAFDAC issues a certificate of health and sanitary condition of
              processed food/drug and cosmetics meant for export (this will only apply to processed agro goods).</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Phytosanitary certificate</h5>
          </div>
          <div class="col-md-8 pull-left p-4 pink-bg">
            <p class="text-dark">The Plant Quarantine Services Organization issues the
              phytosanitary certificate to ensure that plant products traded across borders are free of pests.</p>
          </div>
        </router-link>
      </div>

      <div class="row mb-3 highlight">
        <router-link to="/dashboard/bos" class="col-md-12">
          <div class="col-md-4 pull-left p-4">
            <h5>Clean Certificate Inspection (CCI)</h5>
          </div>
          <div class="col-md-8 pull-left p-4 pink-bg">
            <p class="text-dark">The clean certificate of inspection is issued by the appointed preshipment inspection agent (e.g. Bureau Veritas, SGS etc.) to ensure that the quality, quantity, and price of the goods being shipped tally with what is in the contract.</p>
          </div>
        </router-link>
      </div>

      <div class="col-md-12 col-sm-12">
        <p class="pull-right">
          <router-link to="/dashboard/tracking">
            <a class="btn btn-round venice-bg text-white">
              Track Goods
            </a>
          </router-link>
        </p>
        <p class="pull-left">
          <router-link to="/dashboard/">
            <a class="btn btn-round venice-bg">
              Return to Home
            </a>
          </router-link>
        </p>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'Documents',
  data: function () {
    return {
    }
  }
}
</script>

document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("getStartedBtn");

    if (button) {
        button.addEventListener("click", function () {
            showDocumentSelection();
        });
    }

});


function showDocumentSelection() {

    document.body.innerHTML = `

        <div class="document-page">

            <h1>Choose Your Document</h1>

            <p>Select the type of legal document you want to create.</p>

            <div class="document-options">

                <button onclick="showForm('Rental Agreement')">
                    Rental Agreement
                </button>

                <button onclick="showForm('Leave and License Agreement')">
                    Leave & License
                </button>

                <button onclick="showForm('Affidavit')">
                    Affidavit
                </button>

                <button onclick="showForm('Legal Notice')">
                    Legal Notice
                </button>

            </div>

        </div>

    `;
}


function showForm(documentType) {

    let fields = "";

    if (documentType === "Rental Agreement") {

        fields = `

            <label>Tenant Name</label>

            <input id="tenantName"
                   type="text"
                   placeholder="Enter tenant name">


            <label>Landlord Name</label>

            <input id="landlordName"
                   type="text"
                   placeholder="Enter landlord name">


            <label>Property Address</label>

            <textarea id="propertyAddress"
                      placeholder="Enter property address"></textarea>


            <label>Monthly Rent</label>

            <input id="monthlyRent"
                   type="number"
                   placeholder="Enter monthly rent">


            <label>Agreement Duration</label>

            <input id="rentalPeriod"
                   type="text"
                   placeholder="Example: 11 months">


            <label>Security Deposit</label>

            <input id="deposit"
                   type="number"
                   placeholder="Enter security deposit">

        `;

    }

    else if (documentType === "Leave and License Agreement") {

        fields = `

            <label>Licensor Name</label>

            <input id="licensorName"
                   type="text"
                   placeholder="Enter licensor name">


            <label>Licensee Name</label>

            <input id="licenseeName"
                   type="text"
                   placeholder="Enter licensee name">


            <label>Property Address</label>

            <textarea id="licensePropertyAddress"
                      placeholder="Enter property address"></textarea>


            <label>License Period</label>

            <input id="period"
                   type="text"
                   placeholder="Example: 11 months">


            <label>License Fee</label>

            <input id="fee"
                   type="number"
                   placeholder="Enter license fee">

        `;

    }

    else if (documentType === "Affidavit") {

        fields = `

            <label>Declarant Name</label>

            <input id="declarantName"
                   type="text"
                   placeholder="Enter declarant name">


            <label>Address</label>

            <textarea id="affidavitAddress"
                      placeholder="Enter address"></textarea>


            <label>Purpose</label>

            <input id="purpose"
                   type="text"
                   placeholder="Enter purpose of affidavit">


            <label>Statement</label>

            <textarea id="statement"
                      placeholder="Enter your statement"></textarea>

        `;

    }

    else if (documentType === "Legal Notice") {

        fields = `

            <label>Sender Name</label>

            <input id="senderName"
                   type="text"
                   placeholder="Enter sender name">


            <label>Receiver Name</label>

            <input id="receiverName"
                   type="text"
                   placeholder="Enter receiver name">


            <label>Receiver Address</label>

            <textarea id="noticeAddress"
                      placeholder="Enter receiver address"></textarea>


            <label>Notice Subject</label>

            <input id="subject"
                   type="text"
                   placeholder="Enter notice subject">


            <label>Notice Details</label>

            <textarea id="noticeDetails"
                      placeholder="Enter notice details"></textarea>

        `;
    }


    document.body.innerHTML = `

        <div class="document-page">

            <h1>${documentType}</h1>

            <p>
                Enter the details to generate your legal document.
            </p>

            <div class="form-container">

                ${fields}

                <br>

                <button onclick="generateDocument('${documentType}')">
                    Generate Document
                </button>

            </div>

            <div id="result"></div>

        </div>

    `;
}


function generateDocument(documentType) {

    let result = "";


    if (documentType === "Rental Agreement") {

        const tenant =
            document.getElementById("tenantName").value;

        const landlord =
            document.getElementById("landlordName").value;

        const address =
            document.getElementById("propertyAddress").value;

        const rent =
            document.getElementById("monthlyRent").value;

        const period =
            document.getElementById("rentalPeriod").value;

        const deposit =
            document.getElementById("deposit").value;


        if (!tenant || !landlord || !address ||
            !rent || !period || !deposit) {

            alert("Please fill in all the details.");
            return;
        }


        result = `

            <div class="legal-document">

                <h1>RENTAL AGREEMENT</h1>

                <hr>

                <h2>PARTIES</h2>

                <p>
                    This Rental Agreement is made between
                    <strong>${landlord}</strong>
                    (Landlord) and
                    <strong>${tenant}</strong>
                    (Tenant).
                </p>


                <h2>PROPERTY</h2>

                <p>
                    ${address}
                </p>


                <h2>MONTHLY RENT</h2>

                <p>
                    ₹${rent} per month.
                </p>


                <h2>AGREEMENT DURATION</h2>

                <p>
                    ${period}
                </p>


                <h2>SECURITY DEPOSIT</h2>

                <p>
                    ₹${deposit}
                </p>


                <h2>TERMS AND CONDITIONS</h2>

                <ol>

                    <li>
                        The tenant shall use the property
                        for lawful purposes.
                    </li>

                    <li>
                        The tenant shall pay the agreed rent
                        on time.
                    </li>

                    <li>
                        The property shall be maintained
                        in reasonable condition.
                    </li>

                    <li>
                        Any changes to this agreement should
                        be mutually agreed upon.
                    </li>

                    <li>
                        Both parties should retain a copy
                        of this agreement.
                    </li>

                </ol>


                <h2>SIGNATURES</h2>

                <br><br>

                <div class="signatures">

                    <div>
                        ______________________<br>
                        Landlord<br>
                        ${landlord}
                    </div>

                    <div>
                        ______________________<br>
                        Tenant<br>
                        ${tenant}
                    </div>

                </div>


                <hr>

                <p class="disclaimer">

                    <strong>Disclaimer:</strong>

                    This document is a generated draft for
                    educational and informational purposes.
                    It should be reviewed by a qualified
                    legal professional before actual use.

                </p>

            </div>

            <button onclick="window.print()">
                Print / Save as PDF
            </button>

        `;
    }


    document.getElementById("result").innerHTML = result;

}

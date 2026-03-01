"use client";

import { useState, FormEvent } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState<Record<string, string | boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Registration failed");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  if (status === "success") {
    return (
      <div className="register" style={{ textAlign: "center", padding: "60px 0" }}>
        <h2>Thank You!</h2>
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#003D55" }}>
          Your registration of interest has been submitted successfully. We will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="register_top_text">
          <p>We&apos;re delighted that you&apos;re considering our school for your child. If you&apos;d like to visit us before applying, please use the buttons below to get in touch. If your child is transferring from another school, we kindly ask that you contact us before submitting an application.</p>
        </div>
        <div className="single_content">
          <h3>Which year of entry do you wish to apply for? </h3>
          <div className="form_group">
            <div className="dob_wrap">
              <select name="yearOfEntry" onChange={handleChange}>
                <option value="">Please Select</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>
          </div>
        </div>

        {/* Child Details */}
        <div className="single_form_box">
          <div className="child_details_head">
            <h3>Child Details</h3>
          </div>
          <div className="child_details_body">
            <div className="row">
              <div className="col-md-6">
                <div className="form_group">
                  <label>First Name <span>*</span></label>
                  <input type="text" name="childFirstName" onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Last Name <span>*</span></label>
                  <input type="text" name="childLastName" onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form_group">
                  <label>Name to be used</label>
                  <input type="text" name="childNameUsed" onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form_group">
                  <label>Date of Birth <span>*</span></label>
                  <div className="dob_wrap">
                    <select name="childDobDay" onChange={handleChange} required>
                      <option value="">Day</option>
                      {Array.from({ length: 31 }, (_, i) => (
                        <option key={i + 1} value={String(i + 1)}>{i + 1}</option>
                      ))}
                    </select>
                    <select name="childDobMonth" onChange={handleChange} required>
                      <option value="">Month</option>
                      {["January","February","March","April","May","June","July","August","September","October","November","December"].map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <select name="childDobYear" onChange={handleChange} required>
                      <option value="">Year</option>
                      {Array.from({ length: 15 }, (_, i) => {
                        const year = 2026 - i;
                        return <option key={year} value={String(year)}>{year}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form_group mb-0">
                  <label>Gender <span>*</span></label>
                  <div className="radio_wrap">
                    <label className="radio_item">
                      <input type="radio" name="childGender" value="Boy" onChange={handleChange} />
                      <span></span>
                      Boy
                    </label>
                    <label className="radio_item">
                      <input type="radio" name="childGender" value="Girl" onChange={handleChange} />
                      <span></span>
                      Girl
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Address */}
        <div className="single_form_box mt-50">
          <div className="child_details_head">
            <h3>Home Address</h3>
          </div>
          <div className="child_details_body">
            <div className="row">
              <div className="col-md-12">
                <div className="form_group mb-12">
                  <input type="text" name="homeStreetAddress" placeholder="Street Address" onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form_group mb-12">
                  <input type="text" name="homeAddressLine2" placeholder="Address Line 2" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-12">
                  <input type="text" name="homeCity" placeholder="City" onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-12">
                  <input type="text" name="homeCounty" placeholder="State / Province / Region" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-0">
                  <input type="text" name="homePostcode" placeholder="ZIP / Postal Code" onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-0">
                  <div className="dob_wrap">
                    <select name="homeCountry" onChange={handleChange} required>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parent / Guardian 1 */}
        <div className="single_form_box mt-50">
          <div className="child_details_head">
            <h3>Parent / Guardian 1</h3>
          </div>
          <div className="child_details_body">
            <div className="row">
              <div className="col-md-2">
                <div className="form_group">
                  <label>Title</label>
                  <input type="text" name="parent1Title" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>First Name <span>*</span></label>
                  <input type="text" name="parent1FirstName" onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Last Name <span>*</span></label>
                  <input type="text" name="parent1LastName" onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form_group">
                  <label>Relationship to child <span>*</span></label>
                  <div className="dob_wrap">
                    <select name="parent1Relationship" onChange={handleChange} required>
                      <option value="">Please Select</option>
                      <option value="Mother">Mother</option>
                      <option value="Father">Father</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form_group">
                  <label>Mobile Number <span>*</span></label>
                  <input type="text" name="parent1Mobile" onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Email Address <span>*</span></label>
                  <input type="email" name="parent1Email" onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Confirm Email Address<span>*</span></label>
                  <input type="email" name="parent1EmailConfirm" onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Occupation</label>
                  <input type="text" name="parent1Occupation" onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form_group mb-12">
                  <label>Work Address</label>
                  <input type="text" name="parent1WorkStreetAddress" placeholder="Street Address" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form_group mb-12">
                  <input type="text" name="parent1WorkAddressLine2" placeholder="Address Line 2" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-12">
                  <input type="text" name="parent1WorkCity" placeholder="City" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-12">
                  <input type="text" name="parent1WorkCounty" placeholder="State / Province / Region" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-0">
                  <input type="text" name="parent1WorkPostcode" placeholder="ZIP / Postal Code" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-0">
                  <div className="dob_wrap">
                    <select name="parent1WorkCountry" onChange={handleChange}>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parent / Guardian 2 */}
        <div className="single_form_box mt-50">
          <div className="child_details_head">
            <h3>Parent / Guardian 2</h3>
          </div>
          <div className="child_details_body">
            <div className="row">
              <div className="col-md-2">
                <div className="form_group">
                  <label>Title</label>
                  <input type="text" name="parent2Title" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label>First Name</label>
                  <input type="text" name="parent2FirstName" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Last Name</label>
                  <input type="text" name="parent2LastName" onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form_group">
                  <label>Relationship to child</label>
                  <div className="dob_wrap">
                    <select name="parent2Relationship" onChange={handleChange}>
                      <option value="">Please Select</option>
                      <option value="Mother">Mother</option>
                      <option value="Father">Father</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form_group">
                  <label>Mobile Number</label>
                  <input type="text" name="parent2Mobile" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Email Address</label>
                  <input type="email" name="parent2Email" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Confirm Email Address</label>
                  <input type="email" name="parent2EmailConfirm" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Occupation</label>
                  <input type="text" name="parent2Occupation" onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form_group mb-12">
                  <label>Work Address</label>
                  <input type="text" name="parent2WorkStreetAddress" placeholder="Street Address" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form_group mb-12">
                  <input type="text" name="parent2WorkAddressLine2" placeholder="Address Line 2" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-12">
                  <input type="text" name="parent2WorkCity" placeholder="City" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-12">
                  <input type="text" name="parent2WorkCounty" placeholder="State / Province / Region" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-0">
                  <input type="text" name="parent2WorkPostcode" placeholder="ZIP / Postal Code" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-0">
                  <div className="dob_wrap">
                    <select name="parent2WorkCountry" onChange={handleChange}>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Questions */}
        <div className="single_contents">
          <p>Have you previously attended a school tour at the Rawdah Montessori School and/or met the lead teacher and observed the class?</p>
          <div className="form_group mb-0">
            <div className="dob_wrap">
              <select name="schoolTourAttended" onChange={handleChange}>
                <option value="">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="single_contents">
          <p>Does your child have any significant health conditions? - e.g. Allergies, hearing difficulties, etc.*</p>
          <div className="form_group mb-0">
            <div className="radio_wrap">
              <label className="radio_item">
                <input type="radio" name="healthConditions" value="Yes" onChange={handleChange} />
                <span></span>
                Yes
              </label>
              <label className="radio_item">
                <input type="radio" name="healthConditions" value="No" onChange={handleChange} />
                <span></span>
                No
              </label>
            </div>
          </div>
        </div>

        <div className="single_contents">
          <p>Is your child attending / has attended another school or nursery?*</p>
          <div className="form_group mb-0">
            <div className="radio_wrap">
              <label className="radio_item">
                <input type="radio" name="previousSchool" value="Yes" onChange={handleChange} />
                <span></span>
                Yes
              </label>
              <label className="radio_item">
                <input type="radio" name="previousSchool" value="No" onChange={handleChange} />
                <span></span>
                No
              </label>
            </div>
          </div>
        </div>

        <div className="single_contents">
          <p>Ages of other children</p>
          <div className="form_group mb-0">
            <input type="text" name="otherChildrenAges" onChange={handleChange} />
          </div>
        </div>

        <div className="single_contents">
          <p>Names of children already attending The Rawdah Montessori School</p>
          <div className="form_group mb-0">
            <input type="text" name="childrenAlreadyAttending" onChange={handleChange} />
          </div>
        </div>

        <div className="single_contents">
          <p>Nationality*</p>
          <div className="form_group mb-0">
            <div className="dob_wrap">
              <select name="nationality" onChange={handleChange}>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>
          </div>
        </div>

        <div className="single_contents">
          <p>Ethnic Origin</p>
          <div className="form_group mb-0">
            <div className="dob_wrap">
              <select name="ethnicOrigin" onChange={handleChange}>
                <option value="">Please Select</option>
              </select>
            </div>
          </div>
        </div>

        <div className="single_contents">
          <p>Language spoken at home*</p>
          <div className="form_group mb-0">
            <input type="text" name="languageAtHome" onChange={handleChange} />
          </div>
        </div>

        <div className="single_contents">
          <p>Have you had any issues in which social care have been involved?*</p>
          <div className="form_group mb-0">
            <div className="radio_wrap">
              <label className="radio_item">
                <input type="radio" name="socialCareInvolvement" value="Yes" onChange={handleChange} />
                <span></span>
                Yes
              </label>
              <label className="radio_item">
                <input type="radio" name="socialCareInvolvement" value="No" onChange={handleChange} />
                <span></span>
                No
              </label>
            </div>
          </div>
        </div>

        <div className="single_contents">
          <p>Further relevant information</p>
          <div className="form_group mb-0">
            <textarea name="furtherInformation" onChange={handleChange}></textarea>
          </div>
        </div>

        <div className="single_contents">
          <p>How did you hear about the school?*</p>
          <div className="form_group mb-0">
            <div className="radio_wrap radio_wrap_more">
              <label className="radio_item">
                <input type="radio" name="hearAboutSchool" value="Recommendation" onChange={handleChange} />
                <span></span>
                Recommendation
              </label>
              <label className="radio_item">
                <input type="radio" name="hearAboutSchool" value="Passing by (school signboard)" onChange={handleChange} />
                <span></span>
                Passing by (school signboard)
              </label>
              <label className="radio_item">
                <input type="radio" name="hearAboutSchool" value="Internet Search" onChange={handleChange} />
                <span></span>
                Internet Search
              </label>
              <label className="radio_item">
                <input type="radio" name="hearAboutSchool" value="Social Media" onChange={handleChange} />
                <span></span>
                Social Media
              </label>
              <label className="radio_item">
                <input type="radio" name="hearAboutSchool" value="Flyers and Leaflets" onChange={handleChange} />
                <span></span>
                Flyers and Leaflets
              </label>
              <label className="radio_item">
                <input type="radio" name="hearAboutSchool" value="Newspapers" onChange={handleChange} />
                <span></span>
                Newspapers
              </label>
              <label className="radio_item">
                <input type="radio" name="hearAboutSchool" value="Local Area or Parent Magazines" onChange={handleChange} />
                <span></span>
                Local Area or Parent Magazines
              </label>
              <label className="radio_item">
                <input type="radio" name="hearAboutSchool" value="Other" onChange={handleChange} />
                <span></span>
                Other
              </label>
              <div className="form_group mb-0">
                <input type="text" name="hearAboutSchoolOther" placeholder="Other" onChange={handleChange} />
              </div>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="single_form_box mt-50">
          <div className="child_details_head">
            <h3>Payment</h3>
          </div>
          <div className="child_details_body">
            <div className="single_form_box_title">
              <h3>Application Fee</h3>
              <p>Price: <b>&pound; 75.00</b></p>
              <p>VAT (20%) <b>&pound; 15.00</b></p>
              <p className="mt-30">An application fee of &pound;75.00 + &pound;15 VAT (Administration fee - non refundable) is required in order to put your child&apos;s name on the Waiting List Please note that entry on the Waiting List does not automatically guarantee admission to the school. On acceptance of an offer of a place a deposit of &pound;975.00 will be required to secure your child&apos;s place.</p>
              <div className="sfbt_total">
                <p>Total</p>
                <p><b>&pound; 90.00</b></p>
              </div>
            </div>

            <div className="single_form_box_title">
              <h3>Card Details*</h3>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form_group">
                  <label>Card Number</label>
                  <input type="text" name="cardNumber" placeholder="" onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row align-items-end">
                  <div className="col-sm-6">
                    <div className="form_group">
                      <label>Expiration Date</label>
                      <div className="dob_wrap">
                        <select name="cardExpMonth" onChange={handleChange}>
                          <option value="">Month</option>
                          {Array.from({ length: 12 }, (_, i) => {
                            const m = String(i + 1).padStart(2, "0");
                            return <option key={m} value={m}>{m}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form_group">
                      <div className="dob_wrap">
                        <select name="cardExpYear" onChange={handleChange}>
                          <option value="">Year</option>
                          {Array.from({ length: 10 }, (_, i) => {
                            const y = 2026 + i;
                            return <option key={y} value={String(y)}>{y}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group">
                  <label>Security Code</label>
                  <input type="text" name="cardCvv" placeholder="CVV" onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form_group mb-0">
                  <label>Cardholder Name</label>
                  <input type="text" name="cardholderName" placeholder="" onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="single_form_box_title mt-50">
              <h3>Billing Address</h3>
            </div>
            <label className="agreement_item">
              <input type="checkbox" name="billingSameAsHome" onChange={handleChange} />
              <span className="checkmark"></span>
              <span className="agreement_text">
                Same as home address
              </span>
            </label>
            <div className="row">
              <div className="col-md-12">
                <div className="form_group mb-12">
                  <input type="text" name="billingStreetAddress" placeholder="Street Address" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form_group mb-12">
                  <input type="text" name="billingAddressLine2" placeholder="Address Line 2" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-12">
                  <input type="text" name="billingCity" placeholder="City" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-12">
                  <input type="text" name="billingCounty" placeholder="State / Province / Region" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-0">
                  <input type="text" name="billingPostcode" placeholder="ZIP / Postal Code" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_group mb-0">
                  <div className="dob_wrap">
                    <select name="billingCountry" onChange={handleChange}>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <label className="agreement_item mt-30">
              <input type="checkbox" name="feesAgreement" onChange={handleChange} />
              <span className="checkmark"></span>
              <span className="agreement_text">
                I understand that all fees are payable in advance.<span className="required">*</span>
              </span>
            </label>

            <label className="agreement_item">
              <input type="checkbox" name="withdrawalAgreement" onChange={handleChange} />
              <span className="checkmark"></span>
              <span className="agreement_text">
                I understand that a <strong>FULL TERM&apos;S NOTICE IN WRITING</strong> is necessary in order to withdraw my child,
                failing which I will be liable to pay the equivalent of one term&apos;s fees.<span className="required">*</span>
              </span>
            </label>
          </div>
        </div>

        <div className="form_submit">
          <button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Submit form and pay application fee"}
          </button>
        </div>

        {status === "error" && (
          <p style={{ color: "#C93B3B", marginTop: "15px", textAlign: "center" }}>
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}

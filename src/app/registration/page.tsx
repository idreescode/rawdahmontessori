import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegistrationPage() {
  return (
    <>
      <Header linkPrefix="/" />

      {/* Banner Section */}
      <section className="register_banner_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="register_banner">
                <h1>Registration of Interest</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="register_main">
        <div className="register_bg"><img src="/images/register/register-bg.png" alt="" /></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="register">
                <form action="">
                  <div className="register_top_text">
                    <p>We&apos;re delighted that you&apos;re considering our school for your child. If you&apos;d like to visit us before applying, please use the buttons below to get in touch. If your child is transferring from another school, we kindly ask that you contact us before submitting an application.</p>
                  </div>
                  <div className="single_content">
                    <h3>Which year of entry do you wish to apply for? </h3>
                    <div className="form_group">
                      <div className="dob_wrap">
                        <select>
                          <option>Please Select</option>
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
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Last Name <span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form_group">
                            <label>Name to be used</label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form_group">
                            <label>Date of Birth <span>*</span></label>
                            <div className="dob_wrap">
                              <select>
                                <option>Day</option>
                              </select>
                              <select>
                                <option>Month</option>
                              </select>
                              <select>
                                <option>Year</option>
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
                                <input type="radio" name="gender" value="Boy" />
                                <span></span>
                                Boy
                              </label>
                              <label className="radio_item">
                                <input type="radio" name="gender" value="Girl" />
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
                            <input type="text" placeholder="Street Address" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="Address Line 2" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="City" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="State / Province / Region" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-0">
                            <input type="text" placeholder="ZIP / Postal Code" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-0">
                            <div className="dob_wrap">
                              <select>
                                <option>United Kingdom</option>
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
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form_group">
                            <label>First Name <span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Last Name <span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form_group">
                            <label>Relationship to child <span>*</span></label>
                            <div className="dob_wrap">
                              <select>
                                <option>Please Select</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Mobile Number <span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Email Address <span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Confirm Email Address<span>*</span></label>
                            <input type="email" placeholder="" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Occupation<span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form_group mb-12">
                            <label>Work Address</label>
                            <input type="text" placeholder="Street Address" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="Address Line 2" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="City" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="State / Province / Region" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-0">
                            <input type="text" placeholder="ZIP / Postal Code" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-0">
                            <div className="dob_wrap">
                              <select>
                                <option>United Kingdom</option>
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
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form_group">
                            <label>First Name <span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Last Name <span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form_group">
                            <label>Relationship to child <span>*</span></label>
                            <div className="dob_wrap">
                              <select>
                                <option>Please Select</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Mobile Number <span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Email Address <span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Confirm Email Address<span>*</span></label>
                            <input type="email" placeholder="" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Occupation<span>*</span></label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form_group mb-12">
                            <label>Work Address</label>
                            <input type="text" placeholder="Street Address" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="Address Line 2" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="City" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="State / Province / Region" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-0">
                            <input type="text" placeholder="ZIP / Postal Code" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-0">
                            <div className="dob_wrap">
                              <select>
                                <option>United Kingdom</option>
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
                        <select>
                          <option>Please Select</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="single_contents">
                    <p>Does your child have any significant health conditions? - e.g. Allergies, hearing difficulties, etc.*</p>
                    <div className="form_group mb-0">
                      <div className="radio_wrap">
                        <label className="radio_item">
                          <input type="radio" name="healthConditions" value="Yes" />
                          <span></span>
                          Yes
                        </label>
                        <label className="radio_item">
                          <input type="radio" name="healthConditions" value="No" />
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
                          <input type="radio" name="previousSchool" value="Yes" />
                          <span></span>
                          Yes
                        </label>
                        <label className="radio_item">
                          <input type="radio" name="previousSchool" value="No" />
                          <span></span>
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="single_contents">
                    <p>Ages of other children</p>
                    <div className="form_group mb-0">
                      <input type="text" placeholder="" />
                    </div>
                  </div>

                  <div className="single_contents">
                    <p>Names of children already attending The Rawdah Montessori School</p>
                    <div className="form_group mb-0">
                      <input type="text" placeholder="" />
                    </div>
                  </div>

                  <div className="single_contents">
                    <p>Nationality*</p>
                    <div className="form_group mb-0">
                      <div className="dob_wrap">
                        <select>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="single_contents">
                    <p>Ethnic Origin</p>
                    <div className="form_group mb-0">
                      <div className="dob_wrap">
                        <select>
                          <option>Please Select</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="single_contents">
                    <p>Language spoken at home*</p>
                    <div className="form_group mb-0">
                      <input type="text" placeholder="" />
                    </div>
                  </div>

                  <div className="single_contents">
                    <p>Have you had any issues in which social care have been involved?*</p>
                    <div className="form_group mb-0">
                      <div className="radio_wrap">
                        <label className="radio_item">
                          <input type="radio" name="socialCare" value="Yes" />
                          <span></span>
                          Yes
                        </label>
                        <label className="radio_item">
                          <input type="radio" name="socialCare" value="No" />
                          <span></span>
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="single_contents">
                    <p>Further relevant information</p>
                    <div className="form_group mb-0">
                      <textarea></textarea>
                    </div>
                  </div>

                  <div className="single_contents">
                    <p>How did you hear about the school?*</p>
                    <div className="form_group mb-0">
                      <div className="radio_wrap radio_wrap_more">
                        <label className="radio_item">
                          <input type="radio" name="hearAbout" value="Recommendation" />
                          <span></span>
                          Recommendation
                        </label>
                        <label className="radio_item">
                          <input type="radio" name="hearAbout" value="Passing by (school signboard)" />
                          <span></span>
                          Passing by (school signboard)
                        </label>
                        <label className="radio_item">
                          <input type="radio" name="hearAbout" value="Internet Search" />
                          <span></span>
                          Internet Search
                        </label>
                        <label className="radio_item">
                          <input type="radio" name="hearAbout" value="Social Media" />
                          <span></span>
                          Social Media
                        </label>
                        <label className="radio_item">
                          <input type="radio" name="hearAbout" value="Flyers and Leaflets" />
                          <span></span>
                          Flyers and Leaflets
                        </label>
                        <label className="radio_item">
                          <input type="radio" name="hearAbout" value="Newspapers" />
                          <span></span>
                          Newspapers
                        </label>
                        <label className="radio_item">
                          <input type="radio" name="hearAbout" value="Local Area or Parent Magazines" />
                          <span></span>
                          Local Area or Parent Magazines
                        </label>
                        <label className="radio_item">
                          <input type="radio" name="hearAbout" value="Other" />
                          <span></span>
                          Other
                        </label>
                        <div className="form_group mb-0">
                          <input type="text" placeholder="Other" />
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
                            <input type="text" placeholder="" required />
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
                                  <select>
                                    <option>Month</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form_group">
                                <div className="dob_wrap">
                                  <select>
                                    <option>Year</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group">
                            <label>Security Code</label>
                            <div className="dob_wrap">
                              <select>
                                <option>CVV</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form_group mb-0">
                            <label>Cardholder Name</label>
                            <input type="text" placeholder="" required />
                          </div>
                        </div>
                      </div>

                      <div className="single_form_box_title mt-50">
                        <h3>Billing Address</h3>
                      </div>
                      <label className="agreement_item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="agreement_text">
                          Same as home address
                        </span>
                      </label>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="Street Address" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="Address Line 2" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="City" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-12">
                            <input type="text" placeholder="State / Province / Region" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-0">
                            <input type="text" placeholder="ZIP / Postal Code" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form_group mb-0">
                            <div className="dob_wrap">
                              <select>
                                <option>United Kingdom</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <label className="agreement_item mt-30">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="agreement_text">
                          I understand that all fees are payable in advance.<span className="required">*</span>
                        </span>
                      </label>

                      <label className="agreement_item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="agreement_text">
                          I understand that a <strong>FULL TERM&apos;S NOTICE IN WRITING</strong> is necessary in order to withdraw my child,
                          failing which I will be liable to pay the equivalent of one term&apos;s fees.<span className="required">*</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="form_submit">
                    <button type="submit">Submit form and pay application fee</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

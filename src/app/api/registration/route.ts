import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { syncToLms } from "@/lib/lmsService";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation — check required fields
    const required = [
      "childFirstName", "childLastName", "childDobDay", "childDobMonth",
      "childDobYear", "childGender", "homeStreetAddress", "homeCity",
      "homePostcode", "homeCountry", "parent1FirstName", "parent1LastName",
      "parent1Relationship", "parent1Mobile", "parent1Email",
      "feesAgreement", "withdrawalAgreement",
    ];

    const missing = required.filter((field) => !body[field]);
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Save to MySQL
    const registration = await prisma.registration.create({
      data: {
        yearOfEntry: body.yearOfEntry || "",
        childFirstName: body.childFirstName,
        childLastName: body.childLastName,
        childNameUsed: body.childNameUsed || null,
        childDobDay: body.childDobDay,
        childDobMonth: body.childDobMonth,
        childDobYear: body.childDobYear,
        childGender: body.childGender,
        homeStreetAddress: body.homeStreetAddress,
        homeAddressLine2: body.homeAddressLine2 || null,
        homeCity: body.homeCity,
        homeCounty: body.homeCounty || null,
        homePostcode: body.homePostcode,
        homeCountry: body.homeCountry,
        parent1Title: body.parent1Title || null,
        parent1FirstName: body.parent1FirstName,
        parent1LastName: body.parent1LastName,
        parent1Relationship: body.parent1Relationship,
        parent1Mobile: body.parent1Mobile,
        parent1Email: body.parent1Email,
        parent1Occupation: body.parent1Occupation || null,
        parent1WorkStreetAddress: body.parent1WorkStreetAddress || null,
        parent1WorkAddressLine2: body.parent1WorkAddressLine2 || null,
        parent1WorkCity: body.parent1WorkCity || null,
        parent1WorkCounty: body.parent1WorkCounty || null,
        parent1WorkPostcode: body.parent1WorkPostcode || null,
        parent1WorkCountry: body.parent1WorkCountry || null,
        parent2Title: body.parent2Title || null,
        parent2FirstName: body.parent2FirstName || null,
        parent2LastName: body.parent2LastName || null,
        parent2Relationship: body.parent2Relationship || null,
        parent2Mobile: body.parent2Mobile || null,
        parent2Email: body.parent2Email || null,
        parent2Occupation: body.parent2Occupation || null,
        parent2WorkStreetAddress: body.parent2WorkStreetAddress || null,
        parent2WorkAddressLine2: body.parent2WorkAddressLine2 || null,
        parent2WorkCity: body.parent2WorkCity || null,
        parent2WorkCounty: body.parent2WorkCounty || null,
        parent2WorkPostcode: body.parent2WorkPostcode || null,
        parent2WorkCountry: body.parent2WorkCountry || null,
        schoolTourAttended: body.schoolTourAttended || null,
        healthConditions: body.healthConditions || null,
        previousSchool: body.previousSchool || null,
        otherChildrenAges: body.otherChildrenAges || null,
        childrenAlreadyAttending: body.childrenAlreadyAttending || null,
        nationality: body.nationality || null,
        ethnicOrigin: body.ethnicOrigin || null,
        languageAtHome: body.languageAtHome || null,
        socialCareInvolvement: body.socialCareInvolvement || null,
        furtherInformation: body.furtherInformation || null,
        hearAboutSchool: body.hearAboutSchool || null,
        feesAgreement: body.feesAgreement === true,
        withdrawalAgreement: body.withdrawalAgreement === true,
      },
    });

    // Sync to LMS (non-blocking — don't fail the registration if LMS is down)
    const lmsResult = await syncToLms(body);

    if (!lmsResult.success) {
      await prisma.registration.update({
        where: { id: registration.id },
        data: { lmsSynced: false, lmsSyncError: lmsResult.error },
      });
      console.error(`LMS sync failed for registration ${registration.id}:`, lmsResult.error);
    } else {
      await prisma.registration.update({
        where: { id: registration.id },
        data: { lmsSynced: true },
      });
    }

    return NextResponse.json(
      { success: true, id: registration.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your registration" },
      { status: 500 }
    );
  }
}

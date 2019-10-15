/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateProjectInput {
  name: string;
  ownerId: string;
}

export interface CreateProjectProfileInput {
  businessUnitId: string;
}

export interface CreateProjectProfilesInput {
  projectId: string;
  projectProfiles: CreateProjectProfileInput[];
}

export interface CreateSpendsInput {
  projectProfileId: string;
  spendAmountsAndDates: SpendAmountAndDateInput[];
}

export interface SpendAmountAndDateInput {
  month: string;
  baselineSpend: number;
  forecastedSavings: number;
  actualSavings?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
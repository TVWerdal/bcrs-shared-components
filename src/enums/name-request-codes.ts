//
// Various codes found in NR objects.
// (may be sorted by code)
//

// ref: https://github.com/bcgov/namex/blob/main/api/namex/constants/__init__.py
export enum NrRequestTypeCodes {
  // these will be removed - use new codes below instead
  BC_COMPANY = 'BC',
  BC_CORPORATION = 'CR', // new or AML or resubmit
  BC_UNLIMITED = 'UL', // new or AML or resubmit
  COOP = 'CP', // new or AML or resubmit
  NR_SOLE_PROP = 'FR', // new or resubmit firm or SP
  XPRO_CORPORATION = 'XCR', // new or resubmit

  // change name (or resubmit)
  CHANGE_BEN = 'BEC',
  CHANGE_CCC = 'CCC',
  CHANGE_COOP = 'CCP',
  CHANGE_CORP = 'CCR',
  CHANGE_FIRM = 'CFR', // SP, DBA or GP
  CHANGE_ULC = 'CUL',

  // continuation in (move or resubmit)
  CONTINUATION_IN_BEN = 'BECT',
  CONTINUATION_IN_CCC = 'CCCT',
  CONTINUATION_IN_COOP = 'CTC',
  CONTINUATION_IN_CORP = 'CT',
  CONTINUATION_IN_ULC = 'ULCT',

  // convert (or resubmit)
  CONVERT_BEN = 'BECV',
  CONVERT_CCC = 'CCV',
  CONVERT_CORP = 'BECR',
  CONVERT_ULC = 'UC',

  // new (or resubmit)
  NEW_BC = 'BC',
  NEW_CCC = 'CC',
  NEW_COOP = 'CP',
  NEW_CORP = 'CR',
  NEW_FIRM = 'FR', // SP, DBA or GP
  NEW_ULC = 'UL',
  NEW_XPRO_CORP = 'XCR',

  // restoration
  RESTORATION_CCC = 'RCC',
  RESTORATION_COOP = 'RCP',
  RESTORATION_CORP = 'RCR',
  RESTORATION_SOC = 'RSO',
  RESTORATION_BEN = 'BERE',
  RESTORATION_ULC = 'RUL',
}

export enum NrRequestActionCodes {
  AMALGAMATE = 'AML',
  ASSUMED = 'ASSUMED', // FUTURE: should be AS?
  CHANGE_NAME = 'CHG',
  CONVERSION = 'CNV',
  DBA = 'DBA',
  MOVE = 'MVE',
  NEW_BUSINESS = 'NEW',
  RESTORE = 'REH',
  RENEW = 'REN',
  RESTORATION = 'REST', // FUTURE: is this used?
  RESUBMIT = 'RESUBMIT', // FUTURE: is this used?
}

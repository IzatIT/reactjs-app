import { BASE_API } from 'src/constants'

const createApi = (url: string) => `${BASE_API}/api/v1/${url}`

export class Path {
  static Auth = class {
    static login = createApi('auth/login')
    static refreshToken = createApi('auth/refresh/token')
  }
  static Region = class {
    static get = createApi('references/regions')
  }
  static Organ = class {
    static get = createApi('references/organs')
  }
  static Reference = class {
    static get = createApi('references/common-reference')
  }
  static Rayon = class {
    static get = createApi('references/rayon')
  }
  static CrimeCode = class {
    static get = createApi('references/crime-code')
  }
  static Erp = class {
    static getGeneral = createApi('erp/registration/by-region-gravity')
    static getGeneralByRayon = createApi('erp/registration/by-rayon-gravity')
    static getByDepartment = createApi('erp/registration/by-department')
    static getBySuspect = createApi('erp/registration/by-suspect')
    static getByType = createApi('erp/registration/by-committed-against')
    static getCount = createApi('erp/registration/count')
    static getCompareCount = createApi('erp/registration/comparable-count')
    static getPreventiveMeasuresSelected = createApi('erp/suspect-restraint')
    static getSuspectDetention = createApi('erp/suspect-detention')
    static getProceedResult = createApi('erp/proceed-result')
    static getResidual = createApi('erp/residual')
    static getSuspectAccusation = createApi('erp/suspect-accusation')
  }
  static GpOrgan = class {
    static getGeneral = createApi('erp/proc/registration/by-region-gravity')
    static byDepartment = createApi('erp/proc/dos/by-department')
    static getCancelTerminated = createApi('erp/proc/cancel/termination')
    static getCancelPaused = createApi('erp/proc/cancel/pause')
    static getCount = createApi('erp/proc/notice')
    static getCompareCount = createApi('erp/proc/cancel/proceed-refuse')
  }
  static Jui = class {
    static getGeneral = createApi('jui/general')
    static getGeneralByRayon = createApi('jui/general/by-rayon')
    static getRegistrationByDepartment = createApi(
      'jui/registration/by-department',
    )
    static getByRehabilitativeBasis = createApi(
      'jui/refuse/by-rehabilitative-basis',
    )
    static getByRegistrationType = createApi('jui/registration/by-type')
    static getRegistrationCount = createApi('jui/registration/count')
    static getRegistrationCompareCount = createApi(
      'jui/registration/comparable-count',
    )
  }
}

var loggingEnabled = true;
var logFilter1 = 'Mapping';
var logFilter2 = 'Notifications';
var logFilter3 = 'AppDialog';
var showBackScreenAlert = false;
var TUTORIAL_INDICATOR_TIMEOUT = 2000;
// var SERVER_URL = 'web.digistreetmedia.com/meducatecms/';

var LOGIN_URL = SERVER_START_URL + SERVER_URL + '/api/user/login';
var SIGN_UP_URL = SERVER_START_URL + SERVER_URL + '/api/user/register';
var BANNER_FETCH_URL =
  SERVER_START_URL + SERVER_URL + '/api/banner/banner-list';
var HOME_DATA_URL = SERVER_START_URL + SERVER_URL + '/api/home/homeData';
var MCQ_DATA_URL = SERVER_START_URL + SERVER_URL + '/api/mcq/mcqQuestionBank';
var VIDEOS_DATA_URL = SERVER_START_URL + SERVER_URL + '/api/video/video-list';
var ADD_BOOKMARKS_URL = SERVER_START_URL + SERVER_URL + '/api/mcq/bookmarkMcq';
var DELETE_BOOKMARKS_URL =
  SERVER_START_URL + SERVER_URL + '/api/mcq/deleteBookmarkMcq';
var MCQ_OF_THE_DAY_URL = SERVER_START_URL + SERVER_URL + '/api/mcq/mcqOfTheDay';
var BOOKMARKS_DATA_URL =
  SERVER_START_URL + SERVER_URL + '/api/mcq/studentBookmarkList';
var GLOBAL_BOOKMARKS_DATA_URL =
  SERVER_START_URL + SERVER_URL + '/api/bookmarkList';
var SEARCH_DATA_URL =
  SERVER_START_URL + SERVER_URL + '/api/search/searchList?search_text';
var USER_SETTINGS_DATA_URL =
  SERVER_START_URL + SERVER_URL + '/api/user/getProfileAndSettingsData';
var USER_SETTINGS_UPDATE_DATA_URL =
  SERVER_START_URL + SERVER_URL + '/api/user/updateProfileAndSettings';
var NOTIFICATION_DATA_URL =
  SERVER_START_URL + SERVER_URL + '/api/user/notifications';
var TERM_AND_C_URL = SERVER_START_URL + SERVER_URL + '/site/terms-conditions';
var ASK_Y_QUERY_FEEDBACK_URL =
  SERVER_START_URL + SERVER_URL + '/api/user/feedback';
var EBOOK_DATA_URL = SERVER_START_URL + SERVER_URL + '/api/ebook/getEbookList';
var GLOBAL_ADD_BOOKMARK = SERVER_START_URL + SERVER_URL + '/api/addBookmark';
var GLOBAL_DELETE_BOOKMARK =
  SERVER_START_URL + SERVER_URL + '/api/deleteBookmark';
var GET_OTP = SERVER_START_URL + SERVER_URL + '/api/user/getOtp';
var VERIFY_OTP = SERVER_START_URL + SERVER_URL + '/api/user/verifyOtp';
var ADD_RATING_FOR_MCQ = SERVER_START_URL + SERVER_URL + '/api/user/addRating';
var FORGOT_PASSWORD =
  SERVER_START_URL + SERVER_URL + '/api/user/forgotPassword';
var SOCIAL_SIGNUP_LOGIN_URL =
  SERVER_START_URL + SERVER_URL + '/api/user/facebookLogin';

var UserLoginData = 'UserLoginData';
var UserAgreementData = 'UserAgreementData';
var HomeScreenData = 'HomeScreenData';
var MCQScreenData = 'MCQScreenData';
var VideoScreenData = 'VideoScreenData';
var VideoStatusData = 'VideoStatusData';
var CachedVideoScreenData = 'CachedVideoScreenData';
var CachedUserBookmarksScreenData = 'CachedUserBookmarksScreenData';

const UserLoginDataSchema = {
  name: UserLoginData,
  properties: {
    loginstate: 'string',
    phone_status: 'bool',
    user_details: 'string',
  },
};

const UserAgreementDataSchema = {
  name: UserAgreementData,
  properties: {
    agreed: 'bool',
  },
};

const HomeScreenDataSchema = {
  name: HomeScreenData,
  properties: {
    jsonData: 'string',
  },
};

const MCQScreenDataSchema = {
  name: MCQScreenData,
  properties: {
    jsonData: 'string',
  },
};

const VideoScreenDataSchema = {
  name: VideoScreenData,
  properties: {
    jsonData: 'string',
  },
};

const VideoStatusDataSchema = {
  name: VideoStatusData,
  properties: {
    jsonData: 'string',
  },
};

const CachedVideoScreenDataSchema = {
  name: CachedVideoScreenData,
  properties: {
    jsonData: 'string',
  },
};

const CachedUserBookmarksDataSchema = {
  name: CachedUserBookmarksScreenData,
  properties: {
    jsonData: 'string',
  },
};

// Food Ordering
var SERVER_URL = 'ec2-15-206-123-117.ap-south-1.compute.amazonaws.com:5000';
var SERVER_START_URL = 'http://';
var TEST_CUSTOMER_ID = 'vLdyRXTD';
var CUSTOMER_ID = TEST_CUSTOMER_ID;
var OFFERS_FOR_CUSTOMER_URL =
  SERVER_START_URL + SERVER_URL + '/notifications/' + CUSTOMER_ID + '/offers';
var EVENTS_FOR_CUSTOMER_URL =
  SERVER_START_URL + SERVER_URL + '/notifications/' + CUSTOMER_ID + '/events';

var SETTINGS_FOR_CUSTOMER_URL =
  SERVER_START_URL + SERVER_URL + '/notifications/settings/' + CUSTOMER_ID;

  const NotificationsEventsScreen = 'NotificationEventsScreen';
  const NotificationsToastScreen = 'NotificationsToastScreen';
  const NotificationsOffersScreen = 'NotificationsOffersScreen';

const NotificationsOffersScreenSchema = {
  name: NotificationsOffersScreen,
  properties: {
    jsonData: 'string',
  },
};
const NotificationsEventsScreenSchema = {
  name: NotificationsEventsScreen,
  properties: {
    jsonData: 'string',
  },
};
const NotificationsToastScreenSchema = {
  name: NotificationsToastScreen,
  properties: {
    jsonData: 'string',
  },
};

module.exports = {
  loggingEnabled,
  logFilter1,
  logFilter2,
  logFilter3,
  CUSTOMER_ID,
  OFFERS_FOR_CUSTOMER_URL,
  EVENTS_FOR_CUSTOMER_URL,
  SETTINGS_FOR_CUSTOMER_URL,
  NotificationsEventsScreenSchema,
  NotificationsEventsScreen,
  NotificationsToastScreenSchema,
  NotificationsToastScreen,
  NotificationsOffersScreenSchema,
  NotificationsOffersScreen,

  TUTORIAL_INDICATOR_TIMEOUT,
  LOGIN_URL,
  BANNER_FETCH_URL,
  HOME_DATA_URL,
  MCQ_DATA_URL,
  VIDEOS_DATA_URL,
  USER_SETTINGS_DATA_URL,
  SIGN_UP_URL,
  UserLoginDataSchema,
  UserLoginData,
  UserAgreementDataSchema,
  UserAgreementData,
  HomeScreenDataSchema,
  HomeScreenData,
  MCQScreenDataSchema,
  MCQScreenData,
  VideoScreenDataSchema,
  VideoScreenData,
  VideoStatusDataSchema,
  VideoStatusData,
  CachedVideoScreenDataSchema,
  CachedVideoScreenData,
  ADD_BOOKMARKS_URL,
  DELETE_BOOKMARKS_URL,
  MCQ_OF_THE_DAY_URL,
  BOOKMARKS_DATA_URL,
  SEARCH_DATA_URL,
  USER_SETTINGS_UPDATE_DATA_URL,
  NOTIFICATION_DATA_URL,
  TERM_AND_C_URL,
  ASK_Y_QUERY_FEEDBACK_URL,
  EBOOK_DATA_URL,
  GLOBAL_ADD_BOOKMARK,
  GLOBAL_BOOKMARKS_DATA_URL,
  GLOBAL_DELETE_BOOKMARK,
  GET_OTP,
  VERIFY_OTP,
  ADD_RATING_FOR_MCQ,
  FORGOT_PASSWORD,
  CachedUserBookmarksDataSchema,
  CachedUserBookmarksScreenData,
  SOCIAL_SIGNUP_LOGIN_URL,
  showBackScreenAlert,
};

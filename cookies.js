// Cookies are small pieces of textual data stored in the user's browser by the website they visit.
 // They are used to store information about the user such as login state, preferences, or tracking data, so that the website can remember the user across different sessions or visits.


//  Stored as key-value pairs

// Sent to the server with every HTTP request

// Have expiration dates (can be session-based or persistent)

// Stored per domain and path

// Size limit: usually up to 4KB per cookie



// major.minor.patch  
// e.g. 1.2.3

// ✅ ^ (Caret)
// Meaning: Allow updates for minor and patch, but lock the major version.

//
// Example:
// "^1.2.3"

// Allows:

// ✅ 1.2.4, 1.3.0, 1.9.9

// Does NOT Allow:

// ❌ 2.0.0 (because major changed)

// ✅ ~ (Tilde)
// Meaning: Allow updates for only patch, but lock major and minor versions.

// Example:
// "~1.2.3"

// Allows:

// ✅ 1.2.4, 1.2.9

// Does NOT Allow:

// ❌ 1.3.0, 2.0.0



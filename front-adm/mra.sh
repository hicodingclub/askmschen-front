hg angular-gen -m emailing -o src/app ../../backend/node_modules/@hicoder/express-emailing/model.js
hg angular-gen -m files -o src/app ../../backend/node_modules/@hicoder/express-file-server/model/sample.admin.js
#hg angular-gen -m access -o src/app ../../backend/node_modules/@hicoder/express-auth-server/authz/model.access.js
hg angular-gen -m access -o src/app ../../backend/node_modules/@hicoder/express-auth-server/models/model.user-role.default.js
hg angular-gen -m roles -o src/app ../../backend/node_modules/@hicoder/express-auth-server/models/model.role.default.js

hg angular-gen -m publicinfo -o src/app ../../backend/models/publicInfo/index.js
hg angular-gen -m resources -o src/app ../../backend/models/resources/index.js

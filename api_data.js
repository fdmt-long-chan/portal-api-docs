define({ "api": [
  {
    "type": "post",
    "url": "/admin/users",
    "title": "Create User",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secondary_email",
            "description": "<p>User's Secondary Email (Can be empty string)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>[Optional] User's Role (Default 'student')</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "program_id",
            "description": "<p>[Optional] The Program Id assigned to the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role, either 'admin' or 'student'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secondary_email",
            "description": "<p>User Secondary Email</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "program_id",
            "description": "<p>[Optional] The Program Id assigned to the User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 Created\n{\n  \"id\": 5,\n  \"email\": \"long.chan+test@fdmt.hk\",\n  \"secondary_email\": \"long.chan+test2@fdmt.hk\",\n  \"name\": \"Long Chan\",\n  \"program_id\": null,\n  \"role\": \"admin\",\n  \"created_at\": \"2019-06-07T13:31:16.000Z\",\n  \"updated_at\": \"2019-06-07T13:31:16.000Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DUPLICATE_RECORD",
            "description": "<p>The email address already exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Duplicate Record",
          "content": "HTTP 409 Conflict\n{\n    \"error_code\": \"DUPLICATE_RECORD\",\n    \"message\": \"email1@google.com, email2@google.com already exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/admin/users/:id",
    "title": "Edit User",
    "name": "EditUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secondary_email",
            "description": "<p>User's Secondary Email (Can be empty string)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's Role (Default 'student')</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "program_id",
            "description": "<p>[Optional] The Program Id assigned to the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role, either 'admin' or 'student'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secondary_email",
            "description": "<p>User Secondary Email</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "program_id",
            "description": "<p>[Optional] The Program Id assigned to the User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  \"id\": 5,\n  \"email\": \"long.chan+test@fdmt.hk\",\n  \"secondary_email\": \"long.chan+test2@fdmt.hk\",\n  \"name\": \"Long Chan\",\n  \"program_id\": null,\n  \"role\": \"admin\",\n  \"created_at\": \"2019-06-07T13:31:16.000Z\",\n  \"updated_at\": \"2019-06-07T13:31:16.000Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_FOUND",
            "description": "<p>User is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DUPLICATE_RECORD",
            "description": "<p>The email address already exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found",
          "content": "HTTP 404 Not Found\n{\n    \"error_code\": \"NOT_FOUND\",\n    \"message\": \"User is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "Duplicate Record",
          "content": "HTTP 409 Conflict\n{\n    \"error_code\": \"DUPLICATE_RECORD\",\n    \"message\": \"email1@google.com, email2@google.com already exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/admin/users/:id",
    "title": "Get User By Id",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role, either 'admin' or 'student'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secondary_email",
            "description": "<p>User Secondary Email</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "program_id",
            "description": "<p>[Optional] The Program Id assigned to the User</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user_accesses",
            "description": "<p>List of User Accesses</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_accesses.id",
            "description": "<p>Id of the User Access Record</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_accesses.user_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_accesses.valid_from",
            "description": "<p>Start time of the user access</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_accesses.valid_to",
            "description": "<p>End time of the user access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"id\": 1,\n    \"email\": \"long.chan@fdmt.hk\",\n    \"secondary_email\": null,\n    \"name\": \"Kin Long Chan 😁\",\n    \"program_id\": 23,\n    \"role\": \"admin\",\n    \"created_at\": \"2019-03-25T13:45:00.000Z\",\n    \"updated_at\": \"2019-03-25T13:45:00.000Z\",\n    \"user_accesses\": [\n        {\n            \"id\": 8,\n            \"user_id\": 1,\n            \"valid_from\": \"2019-01-01T00:00:00.000Z\",\n            \"valid_to\": \"2019-01-01T00:00:00.000Z\",\n            \"created_at\": \"2020-01-23T14:22:24.000Z\",\n            \"updated_at\": \"2020-01-23T14:22:24.000Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_FOUND",
            "description": "<p>User is not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found",
          "content": "HTTP 404 Not Found\n{\n    \"error_code\": \"NOT_FOUND\",\n    \"message\": \"User is not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/admin/users",
    "title": "Get or Search Users",
    "name": "GetUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's Email or Secondary Email</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "program_id",
            "description": "<p>The Program Id assigned to the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of Users</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.role",
            "description": "<p>User Role, either 'admin' or 'student'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.secondary_email",
            "description": "<p>User Secondary Email</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.program_id",
            "description": "<p>[Optional] The Program Id assigned to the User</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users.user_accesses",
            "description": "<p>List of User Accesses</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.user_accesses.id",
            "description": "<p>Id of the User Access Record</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.user_accesses.user_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_accesses.valid_from",
            "description": "<p>Start time of the user access</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_accesses.valid_to",
            "description": "<p>End time of the user access</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users.program",
            "description": "<p>Details of the Program that assigned to the User</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.program.id",
            "description": "<p>Program Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.program.name",
            "description": "<p>Program Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n[\n  {\n    \"id\": 5,\n    \"email\": \"long.chan+test@fdmt.hk\",\n    \"secondary_email\": \"long.chan+test2@fdmt.hk\",\n    \"name\": \"Long Chan\",\n    \"program_id\": null,\n    \"role\": \"admin\",\n    \"created_at\": \"2019-06-07T13:31:16.000Z\",\n    \"updated_at\": \"2019-06-07T13:31:16.000Z\",\n    \"user_accesses\": [\n      {\n        \"id\": 4,\n        \"user_id\": 5,\n        \"valid_from\": \"2019-01-01T00:00:00.000Z\",\n        \"valid_to\": \"2019-12-31T23:59:59.000Z\",\n        \"created_at\": \"2019-06-07T13:47:08.000Z\",\n        \"updated_at\": \"2019-06-07T13:47:08.000Z\"\n      }\n    ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/admin/users/:id/user-accesses",
    "title": "Grant Access to User",
    "name": "GrantUserAccess",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "user_accesses",
            "description": "<p>List of User Accesses to be granted</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_accesses.valid_from",
            "description": "<p>Start time of the user access in ISO 8601 format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_accesses.valid_to",
            "description": "<p>End time of the user access is ISO 8601 format</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user_accesses",
            "description": "<p>List of all User Accesses</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_accesses.id",
            "description": "<p>Id of the User Access Record</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_accesses.user_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_accesses.valid_from",
            "description": "<p>Start time of the user access</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_accesses.valid_to",
            "description": "<p>End time of the user access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 201 Created\n[\n    {\n        \"id\": 8,\n        \"user_id\": 1,\n        \"valid_from\": \"2019-01-01T00:00:00.000Z\",\n        \"valid_to\": \"2019-01-01T00:00:00.000Z\",\n        \"created_at\": \"2020-01-23T14:22:24.000Z\",\n        \"updated_at\": \"2020-01-23T14:22:24.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_FOUND",
            "description": "<p>User is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BAD_PARAMS",
            "description": "<p>The body is not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found",
          "content": "HTTP 404 Not Found\n{\n    \"error_code\": \"NOT_FOUND\",\n    \"message\": \"User is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalid Params",
          "content": "HTTP 422 Unprocessable Entity\n{\n    \"error_code\": \"BAD_PARAMS\",\n    \"message\": \"valid_from or valid_to is not ISO 8601 format.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/admin/users/:id/user-accesses",
    "title": "Revoke all Accesses of an User",
    "name": "RevokeUserAccess",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user_accesses",
            "description": "<p>Empty Array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n[]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_FOUND",
            "description": "<p>User is not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found",
          "content": "HTTP 404 Not Found\n{\n    \"error_code\": \"NOT_FOUND\",\n    \"message\": \"User is not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/user.js",
    "groupTitle": "User"
  }
] });

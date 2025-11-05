export declare const auth: {
    handler: (request: Request) => Promise<Response>;
    api: {
        signInSocial: {
            <C extends [import("better-call").Context<"/sign-in/social", {
                method: "POST";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                    provider: import("zod").ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab")[]]>;
                }, "strip", import("zod").ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab";
                    callbackURL?: string | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab";
                    callbackURL?: string | undefined;
                }>;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                url: string;
                redirect: boolean;
            }>;
            path: "/sign-in/social";
            options: {
                method: "POST";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                    provider: import("zod").ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab")[]]>;
                }, "strip", import("zod").ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab";
                    callbackURL?: string | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab";
                    callbackURL?: string | undefined;
                }>;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        getSession: {
            <C extends [import("better-call").Context<"/get-session", {
                method: "GET";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    disableCookieCache: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                }, {
                    disableCookieCache?: boolean | undefined;
                }>>;
                requireHeaders: true;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                session: {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    ipAddress?: string | undefined;
                    userAgent?: string | undefined;
                };
                user: {
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | undefined;
                };
            }>;
            path: "/get-session";
            options: {
                method: "GET";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    disableCookieCache: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                }, {
                    disableCookieCache?: boolean | undefined;
                }>>;
                requireHeaders: true;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        signOut: {
            <C extends [import("better-call").Context<"/sign-out", {
                method: "POST";
                requireHeaders: true;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
            }>;
            path: "/sign-out";
            options: {
                method: "POST";
                requireHeaders: true;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        signUpEmail: {
            <C extends any extends true ? [import("better-call").Context<"/sign-up/email", {
                method: "POST";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    email: import("zod").ZodString;
                    password: import("zod").ZodString;
                }, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<any>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>;
            }>] : [(import("better-call").Context<"/sign-up/email", {
                method: "POST";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    email: import("zod").ZodString;
                    password: import("zod").ZodString;
                }, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<any>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>;
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: {
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | undefined;
                };
                session: null;
            } | {
                user: {
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | undefined;
                };
                session: {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    ipAddress?: string | undefined;
                    userAgent?: string | undefined;
                };
            }>;
            path: "/sign-up/email";
            options: {
                method: "POST";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    email: import("zod").ZodString;
                    password: import("zod").ZodString;
                }, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<any>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        signInEmail: {
            <C extends [import("better-call").Context<"/sign-in/email", {
                method: "POST";
                body: import("zod").ZodObject<{
                    email: import("zod").ZodString;
                    password: import("zod").ZodString;
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                    dontRememberMe: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
                }, "strip", import("zod").ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    dontRememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    dontRememberMe?: boolean | undefined;
                }>;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: {
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | undefined;
                };
                session: {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    ipAddress?: string | undefined;
                    userAgent?: string | undefined;
                };
                redirect: boolean;
                url: string | undefined;
            }>;
            path: "/sign-in/email";
            options: {
                method: "POST";
                body: import("zod").ZodObject<{
                    email: import("zod").ZodString;
                    password: import("zod").ZodString;
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                    dontRememberMe: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
                }, "strip", import("zod").ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    dontRememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    dontRememberMe?: boolean | undefined;
                }>;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        forgetPassword: {
            <C extends [import("better-call").Context<"/forget-password", {
                method: "POST";
                body: import("zod").ZodObject<{
                    email: import("zod").ZodString;
                    redirectTo: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    email: string;
                    redirectTo: string;
                }, {
                    email: string;
                    redirectTo: string;
                }>;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/forget-password";
            options: {
                method: "POST";
                body: import("zod").ZodObject<{
                    email: import("zod").ZodString;
                    redirectTo: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    email: string;
                    redirectTo: string;
                }, {
                    email: string;
                    redirectTo: string;
                }>;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        resetPassword: {
            <C extends [import("better-call").Context<"/reset-password", {
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    token: import("zod").ZodOptional<import("zod").ZodString>;
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }>>;
                method: "POST";
                body: import("zod").ZodObject<{
                    newPassword: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/reset-password";
            options: {
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    token: import("zod").ZodOptional<import("zod").ZodString>;
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }>>;
                method: "POST";
                body: import("zod").ZodObject<{
                    newPassword: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        verifyEmail: {
            <C extends [import("better-call").Context<"/verify-email", {
                method: "GET";
                query: import("zod").ZodObject<{
                    token: import("zod").ZodString;
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: any;
                status: boolean;
            }>;
            path: "/verify-email";
            options: {
                method: "GET";
                query: import("zod").ZodObject<{
                    token: import("zod").ZodString;
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        sendVerificationEmail: {
            <C extends [import("better-call").Context<"/send-verification-email", {
                method: "POST";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    email: import("zod").ZodString;
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/send-verification-email";
            options: {
                method: "POST";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    email: import("zod").ZodString;
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        changeEmail: {
            <C extends [import("better-call").Context<"/change-email", {
                method: "POST";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    newEmail: import("zod").ZodString;
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: any;
                status: boolean;
            }>;
            path: "/change-email";
            options: {
                method: "POST";
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    newEmail: import("zod").ZodString;
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        changePassword: {
            <C extends [import("better-call").Context<"/change-password", {
                method: "POST";
                body: import("zod").ZodObject<{
                    newPassword: import("zod").ZodString;
                    currentPassword: import("zod").ZodString;
                    revokeOtherSessions: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                id: string;
                email: string;
                emailVerified: boolean;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                image?: string | undefined;
            }>;
            path: "/change-password";
            options: {
                method: "POST";
                body: import("zod").ZodObject<{
                    newPassword: import("zod").ZodString;
                    currentPassword: import("zod").ZodString;
                    revokeOtherSessions: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        setPassword: {
            <C extends [import("better-call").Context<"/set-password", {
                method: "POST";
                body: import("zod").ZodObject<{
                    newPassword: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                id: string;
                email: string;
                emailVerified: boolean;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                image?: string | undefined;
            }>;
            path: "/set-password";
            options: {
                method: "POST";
                body: import("zod").ZodObject<{
                    newPassword: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        updateUser: {
            <C extends any extends true ? [import("better-call").Context<"/update-user", {
                method: "POST";
                body: import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                    image: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | undefined;
                }> & import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<any>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            }>] : [(import("better-call").Context<"/update-user", {
                method: "POST";
                body: import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                    image: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | undefined;
                }> & import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<any>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: any;
            }>;
            path: "/update-user";
            options: {
                method: "POST";
                body: import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                    image: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | undefined;
                }> & import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodUnion<any>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>, import("zod").ZodUndefined]>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        deleteUser: {
            <C extends [import("better-call").Context<"/delete-user", {
                method: "POST";
                body: import("zod").ZodObject<{
                    password: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
                }>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : null>;
            path: "/delete-user";
            options: {
                method: "POST";
                body: import("zod").ZodObject<{
                    password: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
                }>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        forgetPasswordCallback: {
            <C extends [import("better-call").Context<"/reset-password/:token", {
                method: "GET";
                query: import("zod").ZodObject<{
                    callbackURL: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : never>;
            path: "/reset-password/:token";
            options: {
                method: "GET";
                query: import("zod").ZodObject<{
                    callbackURL: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        listSessions: {
            <C extends [import("better-call").Context<"/list-sessions", {
                method: "GET";
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
                requireHeaders: true;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : import("better-auth").Prettify<{
                id: string;
                userId: string;
                expiresAt: Date;
                ipAddress?: string | undefined;
                userAgent?: string | undefined;
            }>[]>;
            path: "/list-sessions";
            options: {
                method: "GET";
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
                requireHeaders: true;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        revokeSession: {
            <C extends [import("better-call").Context<"/revoke-session", {
                method: "POST";
                body: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
                requireHeaders: true;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/revoke-session";
            options: {
                method: "POST";
                body: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
                requireHeaders: true;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        revokeSessions: {
            <C extends [import("better-call").Context<"/revoke-sessions", {
                method: "POST";
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
                requireHeaders: true;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/revoke-sessions";
            options: {
                method: "POST";
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
                requireHeaders: true;
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        linkSocialAccount: {
            <C extends [import("better-call").Context<"/link-social", {
                method: "POST";
                requireHeaders: true;
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                    provider: import("zod").ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab")[]]>;
                }, "strip", import("zod").ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab";
                    callbackURL?: string | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab";
                    callbackURL?: string | undefined;
                }>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                url: string;
                redirect: boolean;
            }>;
            path: "/link-social";
            options: {
                method: "POST";
                requireHeaders: true;
                query: import("zod").ZodOptional<import("zod").ZodObject<{
                    currentURL: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: import("zod").ZodObject<{
                    callbackURL: import("zod").ZodOptional<import("zod").ZodString>;
                    provider: import("zod").ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab")[]]>;
                }, "strip", import("zod").ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab";
                    callbackURL?: string | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab";
                    callbackURL?: string | undefined;
                }>;
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
        listUserAccounts: {
            <C extends [(import("better-call").Context<"/list-accounts", {
                method: "GET";
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                id: string;
                provider: string;
            }[]>;
            path: "/list-accounts";
            options: {
                method: "GET";
                use: import("better-call").Endpoint<import("better-call").Handler<string, import("better-call").EndpointOptions, {
                    session: {
                        session: {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            ipAddress?: string | undefined;
                            userAgent?: string | undefined;
                        };
                        user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | undefined;
                        };
                    };
                }>, import("better-call").EndpointOptions>[];
            };
            method: import("better-call").Method | import("better-call").Method[];
            headers: Headers;
        };
    };
    options: {
        database: import("better-auth").Adapter;
        emailAndPassword: {
            enabled: true;
        };
        baseURL: string;
        secret: string;
    };
    $Infer: {
        Session: {
            session: {
                id: string;
                userId: string;
                expiresAt: Date;
                ipAddress?: string | undefined;
                userAgent?: string | undefined;
            };
            user: {
                id: string;
                email: string;
                emailVerified: boolean;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                image?: string | undefined;
            };
        };
    };
};
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
//# sourceMappingURL=auth.d.ts.map
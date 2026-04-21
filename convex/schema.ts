import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        clerkId: v.string(), // Links to their Clerk account
        email: v.string(),
        name: v.string(),
        role: v.union(v.literal("organizer"), v.literal("attendee")), // Strict roles
    }).index("by_clerkId", ["clerkId"]),

    events: defineTable({
        organizerId: v.id("users"), // Foreign key to users table
        title: v.string(),
        description: v.optional(v.string()),
        venue: v.string(),
        startTime: v.number(), // Unix timestamp
        endTime: v.number(), // Unix timestamp
        status: v.union(v.literal("draft"), v.literal("published"), v.literal("completed")),
    }).index("by_organizerId", ["organizerId"]),
});
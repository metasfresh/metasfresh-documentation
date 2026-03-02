---
title: Creating Windows Filters – Best Practice
layout: default
tags:  
  - Window
lang: en
sequence: 00
ref: creating_window_filters_best_practice
---

<!--
See original issue: https://github.com/metasfresh/me03/issues/28384
-->

## Creating Windows Filters – Best Practice

---

# 1. Purpose

Filters in application windows allow users to efficiently search, restrict, and analyze data.  
Well-designed filters improve:

- Usability
- Performance
- Data quality
- Maintainability

This document describes best practices for defining and implementing filters in ERP or metadata-driven application windows.

---

# 2. General Principles

## 2.1 Business-Oriented Design

Filters must reflect how users think about their data.

### ✅ Good Examples
- Date (Document Date)
- Business Partner
- No. (Document No.)
- Document Type

### ❌ Avoid
- Technical IDs (e.g., `C_Order_ID`)
- Internal flags not relevant to users
- Backend-only fields

---

## 2.2 Prefer Indexed Columns

Filters should primarily use:

- Indexed columns
- Frequently searched columns
- High-selectivity fields

Avoid filtering on:

- Large text fields
- Non-indexed calculated columns
- Function-based or subquery-heavy expressions

**Reason:** Filters must not degrade system performance.

---

## 2.3 Use the Correct Reference Type

| Use Case | Recommended Type |
|-----------|------------------|
| Business Partner | Search |
| Status | List |
| Yes/No | Yes-No |
| Date | Date / DateTime |
| Numeric ranges | Number |

Do not use generic string fields if a structured reference exists.

---

# 3. Functional Best Practices

## 3.1 Default Filters

Default filters should:

- Reflect the most common business scenario
- Not hide important data unintentionally
- Be transparent to users

### Example Defaults
- `IsActive = Y`
- `DocStatus != Closed`

Avoid overly restrictive defaults that confuse users.

---

## 3.2 Date Filters

Best practices for date filtering:

- Default date should be document's main date.
- Provide "From" / "To" range capability

### Good
- Date Ordered From / To
- Delivery Date From / To

### Avoid
- Fixed equality date filters
- Hardcoded date conditions in window logic

---

## 3.3 Boolean Filters (Yes/No)

Use boolean filters only when they:

- Represent meaningful business distinctions
- Significantly reduce result sets

### Examples
- Is Vendor
- Is Sales Order
- Processed
- Posted

Avoid cluttering the filter panel with too many technical flags.

---

# 4. Technical Best Practices

## 4.1 Keep Filter Logic Simple

Avoid:

- Complex SQL subqueries
- Heavy database functions
- Cross-table dependencies when possible

Simple logic improves performance and maintainability.

---

## 4.2 Performance Considerations

For large tables:

- Ensure filtered columns are indexed
- Test with production-like data volumes
- Avoid filtering on calculated or virtual columns
- Avoid full table scans

Performance testing is mandatory for transactional windows.

---

# 5. User Experience Guidelines

## 5.1 Order Filters by Importance

Place most frequently used filters at the top:

1. Document No
2. Business Partner
3. Date
4. Status
5. Organization

---

## 5.2 Avoid Overloading the Filter Panel

Too many filters:

- Reduce clarity
- Increase maintenance effort
- Confuse users

Guideline:

- Include essential filters only
- Hide technical or rarely used fields

---

# 6. Testing Checklist

Before releasing a window filter:

- [ ] Does it reflect a real business use case?
- [ ] Is the column indexed?
- [ ] Does it perform well with large datasets?
- [ ] Does it respect role permissions?
- [ ] Does it behave correctly across organizations?
- [ ] Are default values safe and understandable?
- [ ] Is naming clear and business-friendly?

---

# 7. Summary

Good filters are:

- Business-oriented
- Performance-aware
- Security-compliant
- Simple and maintainable
- Focused on user needs

Well-designed filters significantly improve system usability and data transparency.

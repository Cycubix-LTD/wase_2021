---
hidden: true
---

# Jamf Protect

## Device Controls

In Jamf Protect, Device Controls are a security feature that allows administrators to manage and restrict the use of external devices, such as USB drives, on managed macOS devices. By creating control sets, you can enforce policies like blocking all removable storage, allowing read-only access, or setting custom permissions for specific devices based on criteria like serial numbers or encryption status. These controls help prevent unauthorized data transfer and enhance the security of the devices within your organization.

### Configure Device Controls:

• From the Jamf Protect dashboard, click on “Device Controls” in the sidebar.

• Click “Create” to start a new control set.

2\. Name the Control Set:

• Provide a display name, such as “USB Lockdown.”

3\. Set Default Permissions:

• Choose the default permission: Read Only, Read and Write, or Prevent. (Select “Prevent” to block all devices.)

4\. Customize User Message:

• Optionally, set a display message for users attempting to use unapproved devices.

5\. Configure Overrides:

• Allow specific devices through restrictions using criteria like serial numbers or encryption status.

6\. Save and Apply:

• Complete the setup and save the control set for enforcement.

### Adding a Control Set to a Plan

1\. Navigate to Plans:

• Go to the sidebar and select “Plans.”

• Choose the desired plan and click “Edit.”

2\. Assign the Control Set:

• Under “Removable Storage Control Set,” select the set you just created.

3\. Save Changes:

• Click “Save.” The control set is now applied to all computers under this plan.

4\. Enforcement:

• Any non-approved removable storage devices will not function.

• Approved devices with an override will work normally.

import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:mobile_app/shared/theme/app_theme.dart';

/// Market Request Interface.
/// Part of the Enterprise On-Demand Distribution system.
class PostRequestScreen extends StatefulWidget {
  const PostRequestScreen({super.key});

  @override
  State<PostRequestScreen> createState() => _PostRequestScreenState();
}

class _PostRequestScreenState extends State<PostRequestScreen> {
  final _titleController = TextEditingController();
  final _descController = TextEditingController();
  final _budgetController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Launch Market Request"),
        leading: IconButton(
          icon: const Icon(Icons.close),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(24.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildSectionHeader("Asset Specification", "Define the inventory parameters for institutional bidding."),
            SizedBox(height: 32.h),
            
            _buildInputLabel("Request Identifier"),
            _buildTextField(_titleController, "e.g., iPhone 15 Pro Max Titanium"),
            
            SizedBox(height: 24.h),
            _buildInputLabel("Operational Specifications"),
            _buildTextField(_descController, "Define technical requirements (Color, Capacity, Warranty)...", maxLines: 5),
            
            SizedBox(height: 24.h),
            _buildInputLabel("Target Capital Allocation (USD)"),
            _buildTextField(_budgetController, "0.00", icon: Icons.monetization_on_outlined, isNumeric: true),
            
            SizedBox(height: 48.h),
            Container(
              padding: EdgeInsets.all(24.w),
              decoration: BoxDecoration(
                color: AppTheme.primary.withAlpha(13),
                borderRadius: BorderRadius.circular(32.r),
                border: Border.all(color: AppTheme.primary.withAlpha(26)),
              ),
              child: Row(
                children: [
                  const Icon(Icons.gavel_outlined, color: AppTheme.primary, size: 28),
                  SizedBox(width: 20.w),
                  Expanded(
                    child: Text(
                      "Your request will be dispatched to the verified institutional network. Expect competitive quotes within minutes.",
                      style: TextStyle(fontSize: 12.sp, color: Colors.blueGrey[600], fontWeight: FontWeight.bold, height: 1.5),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 48.h),
            
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: AppTheme.primary,
                foregroundColor: Colors.white,
                minimumSize: Size(double.infinity, 70.h),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24.r)),
                elevation: 10,
                shadowColor: AppTheme.primary.withAlpha(77),
              ),
              child: const Text("Execute Market Order", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 0.5)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSectionHeader(String title, String subtitle) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: TextStyle(fontSize: 26.sp, fontWeight: FontWeight.w900, color: Colors.blueGrey[900], letterSpacing: -1)),
        SizedBox(height: 6.h),
        Text(subtitle, style: TextStyle(fontSize: 15.sp, color: Colors.blueGrey[400], fontWeight: FontWeight.w500)),
      ],
    );
  }

  Widget _buildInputLabel(String label) {
    return Padding(
      padding: EdgeInsets.only(bottom: 10.h, left: 4.w),
      child: Text(
        label.toUpperCase(), 
        style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 13, color: Colors.blueGrey, letterSpacing: 1)
      ),
    );
  }

  Widget _buildTextField(TextEditingController controller, String hint, {int maxLines = 1, IconData? icon, bool isNumeric = false}) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(22.r),
        boxShadow: [BoxShadow(color: Colors.black.withAlpha(5), blurRadius: 10, offset: const Offset(0, 4))],
      ),
      child: TextField(
        controller: controller,
        maxLines: maxLines,
        keyboardType: isNumeric ? TextInputType.number : TextInputType.text,
        style: const TextStyle(fontWeight: FontWeight.bold),
        decoration: InputDecoration(
          hintText: hint,
          hintStyle: const TextStyle(color: Colors.blueGrey, fontWeight: FontWeight.normal),
          prefixIcon: icon != null ? Icon(icon, color: AppTheme.primary, size: 20) : null,
          filled: true,
          fillColor: Colors.transparent,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(22.r), borderSide: BorderSide.none),
          contentPadding: EdgeInsets.all(22.w),
        ),
      ),
    );
  }
}
